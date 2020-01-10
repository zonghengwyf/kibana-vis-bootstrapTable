export default function (kibana) {
  return new kibana.Plugin({
    name: 'demo',
    uiExports: {
      visTypes: ['plugins/demo/demo']
    }
  });
}
