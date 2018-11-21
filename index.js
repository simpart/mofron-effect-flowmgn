/**
 * @file mofron-effect-flowmgn/index.js
 * @brief flow margin effect
 * @author simpart
 */
const mf = require('mofron');
const Margin = require('mofron-effect-margin');

mf.effect.FlowMgn = class extends Margin {
    
    constructor (po, p2) {
        try {
            super();
            this.name('FlowMgn');
            this.type('left');
            this.prmOpt(po, p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    execute (cflg, scb, iflg) {
        try {
            if ( (undefined === cflg) &&
                 (true === this.status()) &&
                 (false === this.component().visible()) ) {
                return;
            }
            if ( (undefined === cflg) && (true === this.status()) ||
                 (true === cflg) ) {
                let mg     = 'margin' + '-' + this.type();
                let setmgn = {};
                setmgn[mg] = this.value()[0];
                this.component().adom().style(setmgn);
            }
            super.execute(cflg, scb, iflg);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    enable (tgt) {
        try {
            let mg     = 'margin' + '-' + this.type();
            let setmgn = {};
            setmgn[mg] = this.midValue();
            tgt.adom().style(setmgn);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    disable (tgt) {
        try {
            let mg     = 'margin' + '-' + this.type();
            let setmgn = {};
            setmgn[mg] = this.value()[1];
            tgt.adom().style(setmgn);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    midValue () {
        try {
            let str  = mf.func.getSize(this.value()[0]);
            let end  = mf.func.getSize(this.value()[1]);
            let diff = null;
            diff = str.value() + end.value();
            diff = mf.func.flo2int(diff);
            return ((diff[0] / 2) * diff[1]) + str.type();
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
}
module.exports = mf.effect.FlowMgn;
/* end of file */
