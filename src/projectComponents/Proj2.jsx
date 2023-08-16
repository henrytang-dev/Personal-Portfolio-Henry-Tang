import React, { useMemo, useRef, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import * as Three from 'three'
import Slide1 from '../assets/HeartDiseaseModel/Slide1.jpeg'
import Slide2 from '../assets/HeartDiseaseModel/Slide2.jpeg'
import Slide3 from '../assets/HeartDiseaseModel/Slide3.jpeg'
import Slide4 from '../assets/HeartDiseaseModel/Slide4.jpeg'
import Slide5 from '../assets/HeartDiseaseModel/Slide5.jpeg'
import Slide6 from '../assets/HeartDiseaseModel/Slide6.jpeg'
import Slide7 from '../assets/HeartDiseaseModel/Slide7.jpeg'
import Slide8 from '../assets/HeartDiseaseModel/Slide8.jpeg'
import Slide9 from '../assets/HeartDiseaseModel/Slide9.jpeg'
import Slide10 from '../assets/HeartDiseaseModel/Slide10.jpeg'
import Slide11 from '../assets/HeartDiseaseModel/Slide11.jpeg'
import Slide12 from '../assets/HeartDiseaseModel/Slide12.jpeg'
import Slide13 from '../assets/HeartDiseaseModel/Slide13.jpeg'
import Slide14 from '../assets/HeartDiseaseModel/Slide14.jpeg'

// varying lets us send data from vertex shader to fragment shader
// uv is only accessible in vertexShader; uv already exists automatically in vertexShader; uv is coordinate system
const vertexShader = `
    precision mediump float;
    varying vec2 vUv;
    uniform float u_time;
    uniform float u_amp;


    // simplex 3D code

    vec3 mod289(vec3 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

    vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

    vec4 permute(vec4 x) {
        return mod289(((x*34.0)+1.0)*x);
    }

    vec4 taylorInvSqrt(vec4 r)
    {
    return 1.79284291400159 - 0.85373472095314 * r;
    }

    float snoise(vec3 v)
    {
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    // First corner
    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 =   v - i + dot(i, C.xxx) ;

    // Other corners
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );

    //   x0 = x0 - 0.0 + 0.0 * C.xxx;
    //   x1 = x0 - i1  + 1.0 * C.xxx;
    //   x2 = x0 - i2  + 2.0 * C.xxx;
    //   x3 = x0 - 1.0 + 3.0 * C.xxx;
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
    vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

    // Permutations
    i = mod289(i);
    vec4 p = permute( permute( permute(
                i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    // Gradients: 7x7 points over a square, mapped onto an octahedron.
    // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
    float n_ = 0.142857142857; // 1.0/7.0
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );

    //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
    //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    //Normalise gradients
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    // Mix final noise value
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                    dot(p2,x2), dot(p3,x3) ) );
    }

    // end of simplex code

    void main() {
        vUv = uv;

        vec3 pos = position;
        float noiseFreq = 1.5;
        float noiseAmp = 0.25;
        vec3 noisePos = vec3(pos.x * noiseFreq + u_time, pos.y, pos.z);

        pos.z +=  snoise(noisePos) * u_amp;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }`

const fragmentShader = `
    // helps us determine how much precision the gpu should use to read floats
    // we add the precision when working with floats in a shader
    precision mediump float;
    uniform float u_time;
    uniform vec3 u_color;
    varying vec2 vUv;
    uniform sampler2D uTexture;

    void main() {
        vec3 texture = texture2D(uTexture, vUv).rgb;
        gl_FragColor = vec4(texture, 1.0);

        // for the notes above: gl_FragColor = vec4(vUv.x * u_color, 1.0);
        // also, remember, there must be 4 values for vec4
        // below creates a gradient image
        // gl_FragColor = vec4(sin(vUv.x + u_time) * u_color, 1.0);

    }`


const HeartDisease = ({handleSecond}) => {

    const meshRef = useRef()
    const [hover, setHover] = useState(false)
    const [index, setIndex] = useState(0)
  
    const [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10, slide11, slide12, slide13, slide14] = useLoader(Three.TextureLoader, [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10, Slide11, Slide12, Slide13, Slide14])

    const slides = [
      {img: slide1},
      {img: slide2},
      {img: slide3},
      {img: slide4},
      {img: slide5},
      {img: slide6},
      {img: slide7},
      {img: slide8},
      {img: slide9},
      {img: slide10},
      {img: slide11},
      {img: slide12},
      {img: slide13},
      {img: slide14},
    ]
    // destructuring Clock from useFrame hook
    useFrame((state) => {
        const { clock } = state;
        meshRef.current.material.uniforms.u_time.value = clock.getElapsedTime();
        meshRef.current.material.uniforms.uTexture.value = slides[index].img;

        meshRef.current.material.uniforms.u_amp.value = Three.MathUtils.lerp(
          meshRef.current.material.uniforms.u_amp.value, 
          hover ? 0.8 : 0.0, 0.02
        )
      });
    
    // useMemo to render from memory only on first render
    const uniforms = useMemo(
        () => ({
          u_color: {
            value: new Three.Color(0.0, 0.0, 0.0),
          },
          u_time: {
            value: 0.0,
          },
          uTexture: {
            value: slides[index].img
          },
          u_amp: {
            value: 0.0
          }
        }),
        []
      )

    function handlePointerOver() {
          setHover(true);
          setTimeout(() => setHover(false), 200)
    }
    
    function handleClick() {
      const isLastIndex = index===slides.length - 1;
      const newIndex = isLastIndex ? 0 : index + 1;
      if (newIndex === 0) {
        handleSecond()
      } else if (newIndex === 1) {
        handleSecond()
      }
      setIndex(newIndex)
      handlePointerOver()
    }


    return (
        <>
            <pointLight position={[0, 0, 10]}/>
            <mesh ref={meshRef} onPointerOver = {handlePointerOver} onPointerOut={() => setHover(false)} onClick={handleClick}>
                <planeGeometry args={[0.85, 0.5, 16, 16]} />
                <shaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader} uniforms={uniforms} />
            </mesh>
        </>
    )
}

export default HeartDisease