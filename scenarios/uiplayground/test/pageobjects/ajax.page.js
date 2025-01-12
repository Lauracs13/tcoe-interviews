const Page = require('./page');
const GeneralUtils = require('../helpers/stringUtils/general');


class AjaxPage extends Page {

    get ajaxBtn() {
        return $('#ajaxButton');
    }

    get contentElements() {
        return $('#content').$$('p');
    }

    get spinner() {
        return $('#spinner');
    }

    open() {
        return super.open(GeneralUtils.AJAX_PATH);
    }

    async clickAjaxBtn() {
        await this.ajaxBtn.click();
    }

    countContentElements() {
        return this.contentElements.length;
    }

    async waitForDataLoadIcon() {
        await this.spinner.waitUntil(async function () {
            return await this.getAttribute('style') === 'display: none;';
        }, {
            timeout: 60000,
            timeoutMsg: 'expected to load before 60s'
        });
    }
}

module.exports = new AjaxPage();
