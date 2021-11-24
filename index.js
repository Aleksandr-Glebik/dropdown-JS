class Dropdown {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        // console.log(this.$el);
        // this.open()
        this.items = options.items

        this.$el.querySelector('.dropdown__label').textContent = this.items[0].label

        this.$el.addEventListener('click', event => {
            if (event.target.classList.contains('dropdown__label')) {
                // this.open()
                if (this.$el.classList.contains('open')) {
                    this.close()
                } else {
                    this.open()
                }
            }
        })
    }

    open() {
        this.$el.classList.add('open')
    }

    close() {
        this.$el.classList.remove('open')
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