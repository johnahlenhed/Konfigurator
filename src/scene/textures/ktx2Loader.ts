import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';
import { WebGLRenderer } from 'three';

// Create a KTX2 loader instance
export function createKTX2Loader(gl: WebGLRenderer) {
    const loader = new KTX2Loader();
    loader.setTranscoderPath('/basis/');
    loader.detectSupport(gl);
    return loader;
}