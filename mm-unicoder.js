(function(window){
    'use strict';
    function define_mmUnicoder(){
        var mmUnicoder = {};
        var codes = [32, 4109, 34, 4107, 4179, 4180, 4123, 39, 40, 41, 42, 43, 44, 45, 46, 47, 4160, 4161, 4162, 4163, 4164, 4165, 4166, 4167, 4168, 4169, 4098, 4152, 4170, 61, 4171, 63, 4178, 4119, 4122, 4099, 4142, 4131, 4153, 4157, 4150, 4173, 4146, 4114, 4115, 4134, 4105, 4159, 4111, 4104, 4174, 4158, 4132, 4133, 4128, 4125, 4108, 4172, 4103, 4127, 4175, 4137, 4181, 95, 4176, 4145, 4120, 4097, 4141, 4116, 4154, 4139, 4151, 4100, 4156, 4143, 4144, 4140, 4106, 4126, 4101, 4102, 4121, 4155, 4129, 4096, 4124, 4112, 4113, 4117, 4118, 4135, 4177, 4138, 4110, 32];
        mmUnicoder.convertChar = function(original) {
            var index = original.charCodeAt(0) - 32;
            if (index >= 0 && index <= 127) {
                return String.fromCharCode(codes[index]);
            }
            return original;
        }
        mmUnicoder.convertString = function(original) {
            var result = '';
            for (var i = 0; i < original.length; i++) {
                result += mmUnicoder.convertChar(original[i]);
            }
            return result;
        }
        return mmUnicoder;
    }

    if(typeof(mmUnicoder) === 'undefined') {
        window.mmUnicoder = define_mmUnicoder();
    }
    else {
        console.error("mmUniCoder is already defined")
    }
})(window);
