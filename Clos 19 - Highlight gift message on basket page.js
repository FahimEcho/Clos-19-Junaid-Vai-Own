var closGiftVideo = {
    init: function () {
        this.mainCss();
        this.mainJS();
    },
    mainCss: function () {
        var s = document.createElement('style');
        s.setAttribute('type', 'text/css');
        document.head.appendChild(s).textContent = '';

    },
    closCurrentLang: document.querySelector("html").getAttribute("lang"),
    closButtonLang: {
        "de-DE": "EINE GESCHENK-VIDEONACHRICHT EINSCHLIESSEN?",
        "en-GB": "INCLUDE A GIFT VIDEO MESSAGE?"
    },
    closLangReturn: function () {
        return closGiftVideo.closButtonLang.hasOwnProperty(closGiftVideo.closCurrentLang) ? closGiftVideo.closButtonLang[closGiftVideo.closCurrentLang] : "INCLUDE A GIFT VIDEO MESSAGE?";
    },
    closTabButtons: function () {
        document.querySelector("#giftFormCF2 .MuiAccordionSummary-content h4").classList.add("closTabButton", "giftMessageButton");
        var closTabButton =
            '<h4 class="MuiTypography-root jss15 MuiTypography-subtitle1 closTabButton" id="giftVideoButton">' +
            '' + closGiftVideo.closLangReturn() + '' +
            '</h4>'
        document.querySelector("#giftFormCF2 .MuiAccordionSummary-content h4").insertAdjacentHTML('afterend', closTabButton);
        document.querySelectorAll(".closTabButton").forEach(function (each) {
            each.addEventListener("click", activeTab);
        });
        if (document.querySelector("html").getAttribute("lang") == 'de-DE') {
            document.querySelector("#giftVideoButton").style.left = "315px";
            document.querySelector("#giftFormCF2 .MuiAccordionSummary-root").style.minHeight = "62px";
        }
        function activeTab(e) {
            e.preventDefault();
            e.stopPropagation();
            document.querySelectorAll(".closMessageTab").forEach(function (item) {
                item.style.visibility = "hidden";
            })
            document.querySelectorAll(".closTabButton").forEach(function (each) {
                each.className = each.className.replace(" closActive", "");
            })
            if (e.target.classList.contains("giftMessageButton")) {
                document.querySelector("form[data-testid='giftMessage']").style.visibility = "visible";
                console.log("message")
            } else {
                document.querySelector("form[data-testid='giftMessageVideo']").style.visibility = "visible";
                console.log("video")
            }
            e.currentTarget.className += " closActive";
        }
    },
    closTabContent: function () {
        document.querySelector("form[data-testid='giftMessage']").classList.add("closMessageTab");
        var closVideoGiftMessageWrapper =
            '<form action="#" data-testid="giftMessageVideo" class="videoMessage closMessageTab"' +
            'style="position: absolute;margin-left: 0 !important;width: 98%;top: 76px;">' +
            '<div>' +
            '<div class="MuiFormControl-root MuiFormControl-fullWidth">' +
            '<div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl MuiInputBase-multiline MuiInput-multiline MuiInputBase-adornedEnd"' +
            'maxlength="200"><textarea rows="1" aria-invalid="false" id="input_48" name="message" placeholder="Record a special video message for the recipient of your gift! &#10' +
            'They will receive the video once your order has been delivered. &#10' +
            'Access the order complete page or your order confirmation email to get started." data-testid="input-field-message"' +
            'class="MuiInputBase-input MuiInput-input MuiInputBase-inputMultiline MuiInput-inputMultiline MuiInputBase-inputAdornedEnd"' +
            'style="height: 80px;overflow: hidden;background: white;color: black;"' +
            'disabled=""></textarea><textarea aria-hidden="true"' +
            'class="MuiInputBase-input MuiInput-input MuiInputBase-inputMultiline MuiInput-inputMultiline MuiInputBase-inputAdornedEnd"' +
            'readonly="" tabindex="-1"' +
            'style="visibility: hidden;position: absolute;overflow: hidden;height: 0px;top: 0px;left: 0px;transform: translateZ(0px);width: 660px;"></textarea>' +
            '<div class="MuiInputAdornment-root MuiInputAdornment-filled MuiInputAdornment-positionEnd"></div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</form>';
        document.querySelector("form[data-testid='giftMessage']").insertAdjacentHTML('afterend', closVideoGiftMessageWrapper);
        document.querySelector("#giftFormCF2 .giftMessageButton").click();
    },
    closMobileAccordion: function () {
        var videoAccordionWrapper =
            '<div class="MuiContainer-root MuiContainer-maxWidthLg closVideoAccordionWrapper">' +
            '    <div class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-4">' +
            '        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">' +
            '            <div class="MuiPaper-root MuiAccordion-root MuiPaper-outlined">' +
            '                <div class="MuiButtonBase-root MuiAccordionSummary-root" tabindex="0" role="button"' +
            '                    aria-disabled="false" aria-expanded="false">' +
            '                    <div class="MuiAccordionSummary-content">' +
            '                        <h4 class="MuiTypography-root jss17 MuiTypography-subtitle1">INCLUDE A GIFT VIDEO MESSAGE?</h4>' +
            '                    </div>' +
            '                    <div class="MuiButtonBase-root MuiIconButton-root MuiAccordionSummary-expandIcon MuiIconButton-edgeEnd"' +
            '                        aria-disabled="false" aria-hidden="true"><span class="MuiIconButton-label"><span' +
            '                                class="material-icons MuiIcon-root icon icon-chevron-down MuiIcon-fontSizeSmall"' +
            '                                aria-hidden="true"></span></span><span class="MuiTouchRipple-root"></span></div>' +
            '                </div>' +
            '                <div class="MuiCollapse-container MuiCollapse-hidden" style="min-height: 0px;">' +
            '                    <div class="MuiCollapse-wrapper">' +
            '                        <div class="MuiCollapse-wrapperInner">' +
            '                            <div role="region">' +
            '                                <div class="MuiAccordionActions-root MuiAccordionActions-spacing">' +
            '                                    <form action="#" data-testid="giftMessage">' +
            '                                        <div>' +
            '                                            <div class="MuiFormControl-root MuiFormControl-fullWidth">' +
            '                                                <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl MuiInputBase-multiline MuiInput-multiline MuiInputBase-adornedEnd"' +
            '                                                    maxlength="200"><textarea disabled rows="1" aria-invalid="false" id="input_4"' +
            '                                                        name="message" placeholder="Record a special video message for the recipient of your gift!They will receive the video once your order has been delivered. Access the order complete page or your order confirmation email to get started."' +
            '                                                        data-testid="input-field-message"' +
            '                                                        class="MuiInputBase-input MuiInput-input MuiInputBase-inputMultiline MuiInput-inputMultiline MuiInputBase-inputAdornedEnd"' +
            '                                                        style="height: 78px; overflow: hidden;"></textarea>' +
            '                                                </div>' +
            '                                            </div>' +
            '                                        </div>' +
            '                                    </form>' +
            '                                </div>' +
            '                            </div>' +
            '                        </div>' +
            '                    </div>' +
            '                </div>' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '</div>';
        document.querySelector("div#giftFormCF2 .MuiContainer-root.MuiContainer-maxWidthLg").insertAdjacentHTML('afterend', videoAccordionWrapper);
        document.querySelector(".closVideoAccordionWrapper .MuiButtonBase-root.MuiAccordionSummary-root").addEventListener("click", function () {
            document.querySelector(".closVideoAccordionWrapper .MuiPaper-root.MuiAccordion-root").classList.toggle("Mui-expanded");
            document.querySelector(".closVideoAccordionWrapper .MuiButtonBase-root.MuiIconButton-root").classList.toggle("Mui-expanded");
            document.querySelector(".closVideoAccordionWrapper .MuiButtonBase-root.MuiAccordionSummary-root").classList.toggle("Mui-expanded");
            if (document.querySelector(".closVideoAccordionWrapper .MuiButtonBase-root.MuiAccordionSummary-root").ariaExpanded == 'false') {
                document.querySelector(".closVideoAccordionWrapper .MuiButtonBase-root.MuiAccordionSummary-root").ariaExpanded = 'true';
            } else {
                document.querySelector(".closVideoAccordionWrapper .MuiButtonBase-root.MuiAccordionSummary-root").ariaExpanded = 'false';
            }
            if (document.querySelector(".closVideoAccordionWrapper .MuiCollapse-container").classList.contains("MuiCollapse-hidden")) {
                document.querySelector(".closVideoAccordionWrapper .MuiCollapse-container").classList.remove("MuiCollapse-hidden");
                document.querySelector(".closVideoAccordionWrapper .MuiCollapse-container").classList.add("MuiCollapse-entered");
                document.querySelector(".closVideoAccordionWrapper .MuiCollapse-container").style.height = "127px";
            } else {
                document.querySelector(".closVideoAccordionWrapper .MuiCollapse-container").classList.add("MuiCollapse-hidden");
                document.querySelector(".closVideoAccordionWrapper .MuiCollapse-container").classList.remove("MuiCollapse-entered");
                document.querySelector(".closVideoAccordionWrapper .MuiCollapse-container").style.height = "0px";
            }
        })

    },
    mainJS: function () {
        //For JS
        var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
        if (supportsTouch) {
            closGiftVideo.closMobileAccordion();
        }
        else {
            closGiftVideo.closTabButtons();
            closGiftVideo.closTabContent();
        }
    }


};

(function pollForClos() {
    if (document.querySelector("form[data-testid='giftMessage']") && document.querySelector('#giftFormCF2')) {
        closGiftVideo.init();
        console.log("Variation- A: 01");
    } else {
        setTimeout(pollForClos, 25);
    }
})();