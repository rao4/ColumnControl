 "use strict";

use(function () {
    var listArr = [];
    if (this.fieldValue) {
        listArr = this.fieldValue.split(',')
    }

    return {
        listJson: listArr
    }
});