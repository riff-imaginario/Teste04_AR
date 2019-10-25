AFRAME.registerComponent('my-event', {
    init: function () {
        let marker01 = document.querySelector('#marker01');
        let marker02 = document.querySelector('#marker02');

        let scenelEl           = document.querySelector('a-scene');
        let titleText          = document.querySelector('#title');
        let showMenu           = document.querySelector('#button');
        let showID             = document.querySelector('#btnShowID');
        let menu               = document.querySelector('#menu');
        let line               = document.querySelector('#line');
        let wireFrameDescPanel = document.querySelector('#panelDescription');
        let descPanel          = document.querySelector('#panelFace');
        let txtDescID          = document.querySelector('#txtDescription');

        /*
        showMenu.addEventListener('click', function () {
            menu.setAttribute('visible', true);
        });

        showID.addEventListener('click', function () {
            line.setAttribute('visible', true);
            wireFrameDescPanel.setAttribute('visible', true);
            txtDescID.setAttribute('value', `${txtDescID.id}`);
        });
        */

        marker01.addEventListener('markerFound', function() {
            menu.setAttribute('visible', true);
        });

    }
});
