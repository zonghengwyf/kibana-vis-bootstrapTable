import './bootstrap/jquery.min.js';
import './bootstrap/bootstrap-table.js';
import './bootstrap/bootstrap-table.css';
import './bootstrap/bootstrap-table-zh-CN.js';

class DemoController {
  constructor(el, vis) {
    this.vis = vis;
    this.el = el;
    // this.resize();
    this.config = vis.type.editorConfig;
    this.container = document.createElement('div');
    this.container.className = 'myvis-container-div';
    this.container.innerHTML = '<table class="table table-striped" id="tableDemo" border="1"></table>';
    this.el.appendChild(this.container); 
    $(this.container).css("width","100%")
    this.table = $("#tableDemo");
  }

  render(visData, status) {
    //do something
    //可视化内容写入此
    //visData为数据指标、桶的配置
    //status为自定义参数配置
    console.log(this.vis)
    console.log(visData);
    console.log(status)
    return new Promise(resolve => {
      var parent = this;
      $.ajax({
        url : status.url,
        type : 'GET',
        dataType : 'json',
        // data:{
        //   pageSize:1000000,
        //   deviceType:'MQ,switch,router,server,ups,pdu,sensor,mysql,oracle,EMC,EMCA,IBM,MW,tomcat,disaster,netSafe,san,weblogic,TTHDE&selectedType',
        //   loginuser: 'Admin'
        // },
        success : function(data) {
          console.log(111111);
          console.log(data);
          var columnsList = [];
          try{
            if (data.rows.length !== 0) {
              for (let x in data.rows[0]) {
                columnsList.push({field:x,title:x})
              }
            }
            parent.table.bootstrapTable({
              columns: columnsList,
              data: data.rows,
              pagination: true
            })
          }catch(err){
            console.log(parent.table)
            console.log(err.message)
            alert('请确认Url参数请求返回格式：rows:[{field:value}]');
          }
        },
        error : function(msg) {
          console.log('22222');
          console.log(msg);
          if (status.url.length !== 0) {
            alert('数据获取失败!');
          }
        }
      });
      resolve('done rendering');
    });
  }

  destroy() {
    this.el.innerHTML = '';
  }

}

export { DemoController };
