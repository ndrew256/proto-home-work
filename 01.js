class HtmlElement {
  click () {
    console.log("A click was made...")
  }
}

HtmlElement.prototype.focus = function () {
  console.log("Focusing on an element...")
}

// const el = new HtmlElement()
// el.focus()
// el.click()

class HtmlSelectElement extends HtmlElement {
  constructor(items) {
    super()
    if(arguments.length === 0) {
      console.log("Please, input something!")
    }
    else {
      this.items = items
    }
  }
  addItem(value) {
   if(this.items === undefined || this.items === null) {
     console.log("Can't add an item. Instance is empty!")
   }
   else {
    this.items.push(value)
   }
  }
  removeItem(value) {
    if(this.items === undefined || this.items === null) {
      console.log("Can't remove an item. Instance is empty!")
    }
    else {
      if(Array.isArray(this.items))
        this.items = this.items.filter(el => el !== value)
      else {
        console.log("Instance is not array!")
      }
    }
  }
}

//const extendEl = new HtmlSelectElement([1, 2, 3])

// extendEl.addItem(4)
// console.log(extendEl.items)
// extendEl.removeItem(4)
// console.log(extendEl.items)

//extendEl.click()
//extendEl.focus()