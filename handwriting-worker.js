// Free, on-device OCR. Photos stay in this worker; only model files are downloaded.
let reader;
self.onmessage = async ({data}) => {
  try {
    if (!reader) {
      const {pipeline, env} = await import('https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2');
      env.allowLocalModels = false;
      env.backends.onnx.wasm.numThreads = 1;
      reader = await pipeline('image-to-text', 'Xenova/trocr-base-handwritten', {
        progress_callback: p => self.postMessage({progress: p.status === 'progress' ? 'Downloading handwriting model: '+Math.round(p.progress || 0)+'%' : 'Preparing handwriting reader…'})
      });
    }
    const result = await reader(data.image, {max_new_tokens: 90});
    self.postMessage({text: result[0]?.generated_text || ''});
  } catch (error) {
    self.postMessage({error: error.message || String(error)});
  }
};
