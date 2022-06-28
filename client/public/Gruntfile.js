module.exports = function(grunt) {
const sass = require('node-sass');
grunt.initConfig({
    sass: {
        options: {
            implementation: sass,
            includePaths: ["node_modules/bootstrap-sass/assets/stylesheets"],
        },
        dist: {
            options: {
                outputStyle: "compressed",
            },
            files: [{
                "assets/css/al.style.min.css":             [ "assets/scss/main.scss"],
                "assets/css/layout.a.min.css":             [ "assets/scss/skeleton/layout-a.scss"],
                "assets/css/layout.b.min.css":             [ "assets/scss/skeleton/layout-b.scss"],
                "assets/css/layout.c.min.css":             [ "assets/scss/skeleton/layout-c.scss"],
                "assets/css/layout.d.min.css":             [ "assets/scss/skeleton/layout-d.scss"],
                "assets/css/layout.d.sub.header.min.css":  [ "assets/scss/skeleton/layout-d-sub-header.scss"],
                "assets/css/layout.e.min.css":             [ "assets/scss/skeleton/layout-e.scss"],
                "assets/css/layout.f.min.css":             [ "assets/scss/skeleton/layout-f.scss"],
                "assets/css/layout.g.min.css":             [ "assets/scss/skeleton/layout-g.scss"],
                "assets/css/layout.h.min.css":             [ "assets/scss/skeleton/layout-h.scss"],
                "assets/css/layout.i.min.css":             [ "assets/scss/skeleton/layout-i.scss"],
                "assets/css/layout.j.min.css":             [ "assets/scss/skeleton/layout-j.scss"],
                "assets/css/layout.k.min.css":             [ "assets/scss/skeleton/layout-k.scss"],
                "assets/css/layout.l.min.css":             [ "assets/scss/skeleton/layout-l.scss"],
                "assets/css/layout.m.min.css":             [ "assets/scss/skeleton/layout-m.scss"],
                "assets/css/layout.n.min.css":             [ "assets/scss/skeleton/layout-n.scss"],
                "assets/css/layout.p.min.css":             [ "assets/scss/skeleton/layout-p.scss"],
                "assets/css/layout.q.min.css":             [ "assets/scss/skeleton/layout-q.scss"],

                // plugin css file node modules path
                "assets/css/nouislider.min.css":            ["node_modules/nouislider/dist/nouislider.min.css"],
                "assets/css/fullcalendar.min.css":          ["node_modules/fullcalendar/main.min.css"],
                "assets/css/dataTables.min.css":            ["node_modules/datatables.net-bs5/css/dataTables.bootstrap5.css"],
                "assets/css/summernote.min.css":            ["node_modules/summernote/dist/summernote.css"],
                "assets/css/dropify.min.css":               ["node_modules/dropify/dist/css/dropify.min.css"],
                "assets/css/select2.min.css":               ["node_modules/select2/dist/css/select2.css"],
                "assets/css/sweetalert2.min.css":           ["node_modules/sweetalert2/dist/sweetalert2.css"],
                "assets/css/daterangepicker.min.css":       ["node_modules/daterangepicker/daterangepicker.css"],
                "assets/css/bootstrapdatepicker.min.css":   ["node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css"],
                "assets/css/rangeSlider.min.css":           ["node_modules/ion-rangeslider/css/ion.rangeSlider.min.css"],
                "assets/css/owlcarousel.min.css":           ["node_modules/owl.carousel/dist/assets/owl.carousel.min.css"],
                "assets/css/jquerysteps.min.css":           ["node_modules/jquery.steps/dist/jquery-steps.css"],
                "assets/css/jqueryfancybox.min.css":        ["node_modules/jquery.fancybox/source/jquery.fancybox.css"],
                "assets/css/jqueryskedTape.min.css":        ["node_modules/jquery-sked-tape/dist/jquery.skedTape.css"],
                "assets/css/jsgrid.min.css":                ["node_modules/jsgrid/dist/jsgrid.css"],
                "assets/css/flatpickr.min.css":                ["node_modules/flatpickr/dist/flatpickr.css"],
            },],
        },
    },
    uglify: {
        my_target: {
            files: {
                "assets/bundles/libscripts.bundle.js":          [ "node_modules/jquery/dist/jquery.js","node_modules/bootstrap/dist/js/bootstrap.bundle.js","assets/plugin/colorpicker/colorpicker.js"],
                
                "assets/bundles/apexcharts.bundle.js":          [ "node_modules/apexcharts/dist/apexcharts.min.js"],
                "assets/bundles/sparkline.bundle.js":           [ "node_modules/jquery-sparkline/jquery.sparkline.min.js"],

                "assets/bundles/fullcalendar.bundle.js":        [ "node_modules/fullcalendar/main.min.js"],
                "assets/bundles/dataTables.bundle.js":          [ "node_modules/datatables.net/js/jquery.dataTables.js","node_modules/datatables.net-bs5/js/dataTables.bootstrap5.js","node_modules/datatables.net-responsive/js/dataTables.responsive.js"],
                "assets/bundles/summernote.bundle.js":          [ "node_modules/summernote/dist/summernote.min.js"],
                "assets/bundles/dropify.bundle.js":             [ "node_modules/dropify/dist/js/dropify.min.js"],
                "assets/bundles/select2.bundle.js":             [ "node_modules/select2/dist/js/select2.js"],
                "assets/bundles/sweetalert2.bundle.js":         [ "node_modules/sweetalert2/dist/sweetalert2.all.min.js"],
                "assets/bundles/daterangepicker.bundle.js":     [ "node_modules/daterangepicker/moment.min.js", "node_modules/daterangepicker/daterangepicker.js"],
                "assets/bundles/bootstrapdatepicker.bundle.js": [ "node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"],
                "assets/bundles/bootstraptagsinput.bundle.js":  [ "node_modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.js"],
                "assets/bundles/rangeSlider.bundle.js":         [ "node_modules/ion-rangeslider/js/ion.rangeSlider.js"],
                "assets/bundles/nestable.bundle.js":            [ "node_modules/jquery-nestable/jquery.nestable.js"],
                "assets/bundles/jquerysteps.bundle.js":         [ "node_modules/jquery.steps/dist/jquery-steps.js"],
                "assets/bundles/jquerymaskedinput.bundle.js":   [ "node_modules/jquery.maskedinput/src/jquery.maskedinput.js"],
                "assets/bundles/jqueryfancybox.bundle.js":      [ "node_modules/jquery.fancybox/source/jquery.fancybox.js"],
                "assets/bundles/jqueryskedTape.bundle.js":      [ "node_modules/jquery-sked-tape/dist/jquery.skedTape.js"],
                "assets/bundles/jsgrid.bundle.js":              [ "node_modules/jsgrid/dist/jsgrid.js"],
                "assets/bundles/owlcarousel.bundle.js":         [ "node_modules/owl.carousel/dist/owl.carousel.min.js"],
                "assets/bundles/masonry.bundle.js":             [ "node_modules/masonry-layout/dist/masonry.pkgd.js"],
                "assets/bundles/nouislider.bundle.js":          [ "node_modules/nouislider/dist/nouislider.min.js"],
                "assets/bundles/toastr.bundle.js":              [ "node_modules/toastr/build/toastr.min.js"],
                "assets/bundles/flatpickr.bundle.js":           [ "node_modules/flatpickr/dist/flatpickr.js"],
            },
        },
    },
});
grunt.loadNpmTasks("grunt-sass");
grunt.loadNpmTasks('grunt-contrib-uglify');

grunt.registerTask("buildcss", ["sass"]);	
grunt.registerTask("buildjs", ["uglify"]);
};