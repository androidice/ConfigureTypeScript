import { SampleService, SampleResponse } from '../Shared';
import { SampleHelper } from '../Shared/Helpers/SampleHelper';

import * as $ from "jquery";

export class HomePage {

    label: HTMLElement;
    
    public Init(labelId: string, buttonId: string) { 
        this.label = document.getElementById(labelId); 

        const button = document.getElementById(buttonId);
        button.addEventListener('click', this.onButtonClick.bind(this), false);
    }

    public TestHelper() {
        var testHelper = new SampleHelper();
        testHelper.TestMethod();
    }

    private onButtonClick(e: Event) {
        const httpService = new SampleService();

        httpService.Post<SampleResponse>('/Home/GetMessage', {})
            .then((model) => {
                this.label.innerText = model.title;
            });
    }
}
console.log('log test');
$(document).ready(() => {
    console.log('document ready...', $);
    var homePage = new HomePage();
    homePage.Init('outputLabel', 'runButton');
    homePage.TestHelper();
});

