import * as _ from 'lodash';
export class SampleHelper {

    public TestMethod() {
        var arr = [1, 2, 3];
        _.each(arr, function (val) {
            console.log('Output from Lodash _.each for Element ' + val);
        });
    }
}