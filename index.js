class Dropdown {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        console.log(this.$el);
    }
}



const dropdown = new Dropdown('#dropdown', {
    items: [
        {label: 'Minsk', id: 'mnk'},
        {label: 'Gomel', id: 'gml'},
        {label: 'Grodno', id: 'gdn'},
        {label: 'Mogilev', id: 'mgv'},
        {label: 'Vitebsk', id: 'vtk'},
        {label: 'Brest', id: 'bst'},
    ]
})