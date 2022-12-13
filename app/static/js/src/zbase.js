class XiuAppMenu{
    constructor(root) {
        this.root = root;
        this.$menu = (`
        <div class='xiu_app_menu"></div>
`);
    this.root.$xiu_app.append(this.$menu);
    }
}
class XiuApp{
    constructor(id) {
        this.id = id;
        this.$xiu_app = $('#' + id);
        this.menu = new XiuAppMenu(this);
    }
}