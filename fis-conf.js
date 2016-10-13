/**
 * Created by oak-016 on 16/10/13.
 */
fis.match('/js/{*,**/*}.js', {
    useHash: true,
    packTo: '/js/pkg_widget.js'
})