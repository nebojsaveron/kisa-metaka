// moment.js language configuration
// language : Croatian (hr) 
// NOTE     : This implementation is partially done only to accommodate the needs of fesb.hr .
(function () {
    var lang = {
            months : function (momentToFormat, format) 
            {
            	var nominative = "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac"   .split("_");
            	var genitive   = "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenog_prosinca".split("_");
            	
            	return (/D\. MMMM/.test(format)) ? genitive[momentToFormat.month()] : nominative[momentToFormat.month()];
            }, 
            monthsShort : "sij_velj_ožu_tra_svi_lip_srp_kol_ruj_lis_stu_pro".split("_"),
            weekdays : "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
            weekdaysShort : "ned_pon_uto_sri_čet_pet_sub".split("_"),
            weekdaysMin : "ne_po_ut_sr_če_pe_su".split("_"),
            longDateFormat : {
                LT : "H:mm",
                L : "DD.MM.YYYY",
                LL : "D. MMMM YYYY",
                LLL : "D. MMMM YYYY LT",
                LLLL : "dddd, D. MMMM YYYY LT"
            },
            calendar : {
                sameDay : '[Danas u] LT',
                nextDay : '[Sutra u] LT',
                nextWeek : 'dddd [u] LT', 
                lastDay : '[Jučer u] LT',
                lastWeek : '[prošli] dddd [u] LT',
                sameElse : 'L'
            },
            relativeTime : {
                future : "za %s",
                past : "unatrag %s",
                s : "desetak sekunda",
                m : "minutu",
                mm : "%d minuta",
                h : "jedan sat",
                hh : "prije %d sati",
                d : "dan",
                dd : "%d dana",
                M : "mjesec",
                MM : "%d mjeseci",
                y : "godina",
                yy : "%d godina"
            },
            ordinal : function (number) {
                return '.';
            }
        };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('hr', lang);
    }
}());
