define(function(require, exports, module) {
    var Validator = require('bootstrap.validator');
    require('common/validator-rules').inject(Validator);
    var Notify = require('common/bootstrap-notify');
    var Uploader = require('upload');

    exports.run = function() {
        var $form = $("#class-edit-form");

        var validator = new Validator({
            element: '#class-edit-form',
            autoSubmit: false,
            onFormValidated: function(error, results, $form) {
                if (error) {
                    return false;
                }

                $('#class-edit-btn').button('submiting').addClass('disabled');

                $.post($form.attr('action'), $form.serialize(), function(html) {
                    Notify.success('修改班级成功');
                    window.location.href=$('#backto').attr('href');
                }).error(function(){
                    Notify.danger('修改班级失败');
                });

            }
        });
        validator.addItem({
            element: '#gradeId',
            required: true,
            errormessage:'请选择年级'
        });
        validator.addItem({
            element: '#year',
            required: true,
            errormessage:'请选择入学年份'
        });

        var uploader = new Uploader({
            trigger: '#school-class-icon-upload',
            name: 'icon',
            action: $('#school-class-icon-upload').data('url'),
            accept: 'image/*',
            error: function(file) {
                Notify.danger('上传图片失败，请重试！')
            },
            success: function(response) {
                response = $.parseJSON(response);
                $("#icon-container").html('<img src="' + response.url + '?'+(new Date()).getTime()+'">');
                $form.find('[name=icon]').val(response.path);
                Notify.success('上传班级图标成功！');
            }
        }); 
       
       var uploader2 = new Uploader({
            trigger: '#school-class-backgroundImg-upload',
            name: 'backgroundImg',
            action: $('#school-class-backgroundImg-upload').data('url'),
            accept: 'image/*',
            error: function(file) {
                Notify.danger('上传图片失败，请重试！')
            },
            success: function(response) {
                response = $.parseJSON(response);
                $("#backgroudImg-container").html('<img src="' + response.url + '?'+(new Date()).getTime()+'">');
                $form.find('[name=backgroundImg]').val(response.path);
                Notify.success('上传班级背景图片成功！');
            }
        }); 
    };

});