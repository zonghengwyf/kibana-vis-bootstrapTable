// import { CATEGORY } from 'ui/vis/vis_category';
import { VisFactoryProvider } from 'ui/vis/vis_factory';
// import { VisSchemasProvider } from 'ui/vis/editors/default/schemas';
import { Schemas } from 'ui/vis/editors/default/schemas';
import { VisTypesRegistryProvider } from 'ui/registry/vis_types';
import { Status } from 'ui/vis/update_status';
import { image } from './images/icon-demo.svg';
import { DemoController } from './demo_controller';

//import DemoTemplate from './demo.html';
import './demo';
import EditorTemplate from './edit.html';


function DemoChartsProvider(Private) {
  const VisFactory = Private(VisFactoryProvider);
  // const Schemas = Private(VisSchemasProvider); //VisSchemasProvider类型

  // 这个js模块，返回视图类型插件的一个实例，也可以实现一个空的视图类型的插件
  return VisFactory.createBaseVisualization({
    name: 'bootstrap-Table',
    title: 'bootstrap-Table',
    icon: 'fa fa-gear',
    description: 'Plugin of Bootstrap Table',
    // category: CATEGORY.OTHER,
    // requiresUpdateStatus: [Status.PARAMS, Status.RESIZE, Status.DATA],
    visualization: DemoController,
    visConfig: {
      defaults: {
        url: ''
      }
    },
    hierarchicalData: true,
    responseHandler: 'none',
    editorConfig: {
      optionsTemplate: EditorTemplate,
      schemas: new Schemas(
        [
            {
              group: 'metrics',
              name: 'metric',
              title: 'Y轴',
              min: 1,
              aggFilter: '!std_dev',
              defaults: [
                { schema: 'metric', type: 'count' }
              ]
            },
            {
              group: 'buckets',
              name: 'segment',
              title: 'X轴',
              min: 0,
              max: 1,
              aggFilter: ['terms']
            },
            {
              group: 'buckets',
              name: 'group',
              title: '拆分行',
              min: 0,
              max: 1,
              aggFilter: ['terms']
            },
            {
              group: 'buckets',
              name: 'split',
              title: '拆分表',
              min: 0,
              max: 1,
              aggFilter: ['terms']
            }
        ])
    }
  });
}

// register the provider with the visTypes registry
VisTypesRegistryProvider.register(DemoChartsProvider);
export { DemoChartsProvider };
