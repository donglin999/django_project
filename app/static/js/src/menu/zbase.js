class XiuAppMenu{
    constructor(root) {
        this.root = root;
        this.$menu = (`
        <div class='xiu_app_menu"></div>
`);
    this.root.$xiu_app.append(this.$menu);
    }
}