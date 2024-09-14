'use strict';

const ran = {
    choose: (...a) => a[Math.floor(Math.random() * a.length)],
    range: (min, max) => Math.random() * (max - min) + min
}
ran.frange = (min, max) => Math.floor(ran.range(min, max))
String.prototype.last = Array.prototype.last = function () {
    return this[this.length - 1]
}
const sane = {
    isInt: n => Math.trunc(n) === n,
    sanitize: num => (num === num) && num !== null && isFinite(num),
    equality: (...target) => target.every(o => Object.is(o, target[0])),
    arreq: function (...targets) {
        if (targets.length < 2) {
            throw RangeError('At least 2 arguments required.')
        }
        let lengths = []
        for (let i = 0, len = targets.length; i < len; i++) {
            if (!Array.isArray(targets[i])) {
                throw TypeError('Argument #' + (i + 1) + ' is not an Array.')
            }
            lengths.push(targets[i].length)
        }
        for (let i = 0, max = Math.max(...lengths); i < max; i++) {
            for (let comparisons of targets) {
                if (!equality(targets[0][i], comparisons[i])) {
                    return false
                }
            }
        }
        return true
    }
}
Array.prototype.backwards = function (func) {
    for (let i = this.length; i--;) {
        if (i in this) {
            func(this[i], i, this)

        }
    }
}
Array.prototype.order = function (type) {
    if (type == 'lth') return this.toSorted((a, b) => a - b);
    return this.toSorted((a, b) => b - a)
}
Array.prototype.center = function () {
    return this[Math.floor(this.length / 2)]

}
String.prototype.toOrdinal = function () {
    switch (this.last()) {
        case '1':
            return this + 'st'
        case '2':
            return this + 'nd'
        case '3':
            return this + 'rd'
        default:
            return this + 'th'
    }
}


Array.prototype.average = function (type) {
    if (this.length === 0) return NaN; // Handle empty array case

    let sorted = this.slice().sort((a, b) => a - b); // Sort the array

    if (type) {
        // Calculate the median
        const median = sorted[Math.floor(sorted.length / 2)];

        // Calculate the first quartile (Q1) and third quartile (Q3)
        const q1 = sorted[Math.floor(sorted.length / 4)];
        const q3 = sorted[Math.floor(3 * sorted.length / 4)];

        // Calculate the IQR
        const IQR = q3 - q1;

        // Calculate the fences
        const upperFence = q3 + 1.5 * IQR;
        const lowerFence = q1 - 1.5 * IQR;

        // Filter outliers
        const filtered = sorted.filter(x => x >= lowerFence && x <= upperFence);

        // Recalculate the average on the filtered array
        return filtered.reduce((a, b) => a + b, 0) / filtered.length;
    } else {
        // Calculate average on the original array
        return sorted.reduce((a, b) => a + b, 0) / sorted.length;
    }
};

String.prototype.reverse = function () {
    return [...this].reverse().join("")
}

String.prototype.upper = function () {
    return this[0].toUpperCase() + this.slice(1)
}



Array.prototype.swap = function (a, b) {
    [this[a], this[b]] = [this[b], this[a]]

    return this
}
Array.prototype.swapWithin = function (a, b) {
    let slot = this.indexOf(a),
        slot2 = this.indexOf(b);
    if (slot === -1 || slot2 === -1) {
        return this
    }
    this.swap(slot, slot2)
    return this
}
Array.prototype.delete = function (index) {
    this.splice(index, 1)
    return this
}
Array.prototype.deleteWithin = function (index) {
    let slot = this.indexOf(index)
    if (slot === -1) {
        return this
    }
    this.delete(slot)
    return this
}
Array.prototype.shuffle = function () {
    let n = this.length;
    let ammo = [...Array(n).keys()]; // Create an array with indices [0, 1, 2, ..., n-1]
    let out = [];

    while (ammo.length > 0) {
        let randIndex = Math.floor(Math.random() * ammo.length);
        let chosenIndex = ammo[randIndex];
        out.push(this[chosenIndex]);
        ammo.splice(randIndex, 1); // Remove the used index from the ammo array
    }

    return out;
};
Array.prototype.pick = function () {
    return ran.choose(...this)
}
const color = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    grey: '#808080',
    green: "#008000",
    greenyellow: "#adff2f",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
};
Object.defineProperty(color, 'dhk', {
    value(hex, percent = 40) {
        hex = hex.replace(/^#/, ''); let r = parseInt(hex.substring(0, 2), 16), g = parseInt(hex.substring(2, 4), 16), b = parseInt(hex.substring(4, 6), 16); r = Math.round(r * (1 - percent / 100)); g = Math.round(g * (1 - percent / 100)); b = Math.round(b * (1 - percent / 100)); r = Math.min(255, Math.max(0, r)); g = Math.min(255, Math.max(0, g)); b = Math.min(255, Math.max(0, b)); return '#' + [r, g, b].map(c => { const hex = c.toString(16); return hex.length === 1 ? '0' + hex : hex; }).join('');
    }, enumerable: false
})
Object.defineProperty(color,'log', {
    value(colr){
        console.log(`%c ${colr}`, `color: ${colr};font-size: 100px; background-color: ${colr}`)
    },
    enumerable:false,
} )
class Elem {
    static textStyle(message, options) {
        this.history[message] ??= 0
        this.history[message]++
        console.log(`%c ${message}`, `background: ${options.color};color: ${options.textColor ?? '#000000'};font-style: ${options.font};font-size: ${options.size ?? 15}px;`)
    }
    static history = {}
    static loaded = [];
    static img(src) {
        if (Elem.loaded.includes(src)) {
            return
        }
        Elem.progress(1)
        let x = new Image()
        x.src = src
        if (!src) {
            throw TypeError('No source for image provided.')
        }
        x.onerror = function (err) {
            Elem.error(`Image error: ${err}`)
            Elem.progress(-1)
        }
        x.onload = () =>{
            Elem.progress(-1)
        }
        Elem.loaded.push(src)
        Elem.info(`Preloading Image: ${x.src}`)
        return src

    }
    static youtube = class extends this {
        constructor(opts) {
            opts.tag = 'iframe'
            super(opts)
            this.loading = 'lazy'
            this.frameborder = 0
            this.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            this.referrerpolicy = 'strict-origin-when-cross-origin'
            this.allowfullscreen = true
        }
    }
    static canvas = class extends this {
        fill(col) {
            let old = this.ctx.fillStyle
            this.ctx.fillStyle = col ?? old
            this.ctx.fill()
            this.ctx.fillStyle = old

        }
        stroke(col) {
            let old = this.ctx.strokeStyle
            this.ctx.strokeStyle = col ?? old
            this.ctx.stroke()
            this.ctx.strokeStyle = old

        }
        o = class {
            velocity = {
                x: 0,
                y: 0,
                a: 0
            }
            constructor(opts) {
                this.context = opts.context
                if (!this.context) {
                    throw TypeError('No context provided.')
                }
                this.context.region.all.push(this)
                this.x = opts.x ?? 0
                this.y = opts.y ?? 0
                this.angle = 0
            }
            draw() {
                let { ctx } = this.context
                ctx.save()
                ctx.translate(this.x, this.y)
                ctx.rotate(this.angle)
                ctx.beginPath()
                ctx.arc(0, 0, 30, 0, Math.PI * 2)
                ctx.fill()
                this.illustrate?.()
                ctx.restore()
            }
        }
        constructor(opts) {
            throw TypeError('This feature is currently not yet supported.')
            opts.tag = 'canvas'
            super(opts)
            Elem.contexts ??= []
            Elem.contexts.push(this)
            this.ctx = this.content.getContext('2d')
            this.frame = 0
            this.ctx.textAlign = 'center'
            this.ctx.textBaseline = 'middle'
            this.resize = opts.resize ?? false
            this.update = () => {
                this.frame++
                if (this.resize) {
                    this.width = window.innerWidth
                    this.height = window.innerHeight
                }
                this.ctx.clearRect(0, 0, this.width, this.height)
                this.region.toKill.forEach(o => this.region.all.deleteWithin(o))
                this.region.toKill = []
                this.region.all.forEach(o => o.draw())
            }
            this.region = {
                all: [],
                toKill: []
            }
        }

    }
    static clear() {
        while (Elem.elements.length) Elem.elements.forEach(o => o.kill())
    }
    static attributes = ['for', 'href', 'innerHTML', 'type', 'action', 'method', 'required', 'download', 'style', 'value', 'loading', 'name', 'checked', 'src', 'accept', 'placeholder', 'title', 'controls', 'id', 'readonly', 'width', 'height', 'frameborder', 'allow', 'allowfullscreen']
    static $(query) {
        if (query.includes('#')) {
            return document.getElementById(query.replace('#', ''))?.content
        } else {
            let arr = []
            for (let element of document.querySelectorAll(query)) {
                arr.push(element.content)
            }
            return arr
        }
    }
    static assetsComplete() {
    }
    static progress(b=-1) {
        Elem.assetsToLoad += b
        if (!Elem.assetsToLoad) {
            setTimeout(()=>{
                if (!Elem.assetsToLoad) {
                    Elem.success('All assets pre-loaded.')
                    Elem.assetsComplete?.()
                    delete Elem.assetsComplete
                    delete Elem.assetsToLoad
                }
            },1000)
      
        }
    }
    static {
        document.body.onload =  ()=>Elem.progress(-1);

        let s = document.createElement('style')
        s.innerHTML = `.fadeOut{-webkit-animation:fadeOut 1s ease-out both;animation:fadeOut 1s ease-out both}
    /* ----------------------------------------------
* Generated by Animista on 2024-9-10 16:55:54
* Licensed under FreeBSD License.
* See http://animista.net/license for more info. 
* w: http://animista.net, t: @cssanimista
* ---------------------------------------------- */

@-webkit-keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}
.fadeIn{-webkit-animation:fadeIn 1.2s cubic-bezier(.39,.575,.565,1.000) both;animation:fadeIn 1.2s cubic-bezier(.39,.575,.565,1.000) both}
/* ----------------------------------------------
* Generated by Animista on 2024-9-10 16:56:42
* Licensed under FreeBSD License.
* See http://animista.net/license for more info. 
* w: http://animista.net, t: @cssanimista
* ---------------------------------------------- */

@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}
.hidden {
display: none
}
.center {
margin: auto;
position: fixed;
align-items: center;
justify-content: center;
left: 50%;
top: 50%;
}
`
        document.head.appendChild(s)
    }
    static tracking = {}
    static listeners = 0;
    static assetsToLoad = 1;
    static warn(message) {
        if (!Elem.logLevels.warn) {
            return
        }
        Elem.textStyle(`[WARN] ${message}`, { textColor: color.yellow, size: 15 })
    }
    static error(message) {
        if (!Elem.logLevels.error) {
            return
        }
        Elem.textStyle(`[ERROR] ${message}`, { textColor: color.red, size: 15 })
    }
    static findClass(className) {
        const styleSheets = document.styleSheets;
        // Loop through each stylesheet
        for (let i = 0; i < styleSheets.length; i++) {
            const rules = styleSheets[i].cssRules || styleSheets[i].rules;
            for (let j = 0; j < rules.length; j++) {
                if (rules[j].selectorText === `.${className}`) {
                    return true;
                }
            }
        }
        return false
    }
    static info(message) {
        if (!Elem.logLevels.info) {
            return
        }
        Elem.textStyle(`[INFO] ${message}`, { textColor: '#FFFFFF', size: 10 })
    }
    static success(message) {
        if (!Elem.logLevels.success) {
            return
        }
        Elem.textStyle(`[SUCCESS] ${message}`, { textColor: color.lightgreen, size: 15 })
    }
    static debug(message) {
        if (!Elem.logLevels.debug) {
            return
        }
        Elem.textStyle(`[DEBUG] ${message}`, { textColor: color.orange, size: 10 })
    }
    static messages = {
        noclass(msg) {
            Elem.warn(`"${msg}" currently does not exist within the documents Style Sheets`)
        }
    }
    static elements = []
    static logLevels = {
        debug: false,
        warn: false,
        error: false,
        info: false,
        success: false,
    }
    static select(identifier) {
        let element = $search(identifier)
        Object.setPrototypeOf(element, this.prototype)
        return element.current
    }
    #display;
    #_label_ = ''
    #initial
    constructor(opts, immediate) {
        if (!opts?.tag) {
            Elem.error('No tag was provided so i cannot make the new node.')
            return
        }
        if (Elem.logLevels.debug) {
            let arr = ''
            for (let [key, value] of Object.entries(opts)) {

                arr += `${key}="${value}" `.replaceAll('\n', '').replaceAll(' ', '')
            }
            Elem.debug(`New <${opts.tag}> element:\n ${arr}`)
        }
        if (opts._label_) {
            if (!(opts._label_ in Elem.tracking)) {
                this.#_label_ = opts._label_
                Elem.tracking[this.#_label_] = this
            } else {
                Elem.error(`${opts._label_} is already being used as an identifier!`)
            }
        }
        this.eventNames = {}
        Object.defineProperty(this.eventNames, 'trigger', {
            enumerable: false, value: (search) => {
                if (search) {
                    if (search in this.eventNames) this.eventNames[search]();
                    else Elem.warn(`Non-existent event: ${search}`);
                }
                else {
                    let t = 0;
                    Object.values(this.eventNames).forEach(o => { t++; o.call(this) });
                    return t
                }
            }
        })
        this.content = document.createElement(opts.tag)
        Elem.elements.push(this)
        this.content.content = this
        for (let attr of Elem.attributes) {
            if (attr in opts) this[attr] = opts[attr]
        }

        /*    opts.type && this.content.setAttribute('type', opts.type);opts.for && this.content.setAttribute('for', opts.for);opts.download && this.content.setAttribute('download', opts.download);opts.style && this.content.setAttribute('style', opts.style);opts.value && this.content.setAttribute('value', opts.value);opts.name && this.content.setAttribute('name', opts.name);opts.checked != null && (this.content.setAttribute('checked', opts.checked));opts.src && this.content.setAttribute('src', opts.src);opts.accept && this.content.setAttribute('accept', opts.accept);opts.placeholder && this.content.setAttribute('placeholder', opts.placeholder);opts.title && this.content.setAttribute('title', opts.title);opts.controls && this.content.setAttribute('controls', opts.controls);opts.id && this.content.setAttribute('id', opts.id);opts.readonly && this.content.setAttribute('readonly', opts.readonly);opts.width && this.content.setAttribute('width', opts.width);opts.height && this.content.setAttribute('height', opts.height);opts.href && this.content.setAttribute('href', opts.href)*/
        this.content.innerHTML = opts.text ?? ''
        this.parent = null

        this.children = []
        opts.style?.forEach?.(o => this.content.style[o] = opts.style[o])
        this.#display = this.content.style.display
        this.#initial = opts
        if (opts.class) {
            for (let $class of opts.class) {
                this.content.classList.add($class)
            }
        }
        if (opts.events) {
            if (!Array.isArray(opts.events)) {
                opts.events = Object.entries(opts.events)
            }
            this.addevent(...opts.events)
        }
        if (opts.parent) {
            this.appendTo(opts.parent)
        }
        this.current = this.content
        if (immediate) {
            this.appendTo(document.body)
        }
        if (opts.children) {
            for (let kid of opts.children) {
                kid.appendTo(this.current)
                this.children.push(kid)
                kid.parent = this
            }
        }
        opts.start?.call?.(this)
    }
    highlight() {
        this.content.style.zIndex = '999999'
    }
    get initial() {
        return this.#initial
    }
    appendTo(parent) {
        if (typeof parent === 'string') {
            Elem.$('#' + parent).content.appendChild(this.content)
            return
        }
        try {
            parent.appendChild(this.content)
        }
        catch (e) {
            parent.content.appendChild(this.content)
        }
        if (parent instanceof Elem) {
            parent.children.push(this)
            this.parent = parent
        }
        return this
    }
    appendInto(child) {
        this.content.appendChild(child.content)
        this.children.push(child)
        child.parent = this
        return this
    }
    appendIntoBody() {
        document.body.appendChild(this.content)
    }
    addClass(...className) {
        this.add({ class: className })
        return this
    }
    add(props) {
        if (props.class) {

            /*  if (!Array.isArray(props.class)) {
                  Elem.error(`Expected Array, instead got ${typeof props.class}`)
              }*/
            if (typeof props.class === 'string') {
                props.class = [props.class]
            }

            for (let $class of props.class) {
                if (!Elem.findClass($class)) {
                    Elem.messages.noclass($class)
                } else if ([...this.content.classList].includes($class)) {
                    Elem.warn(`Class ${$class} already added${this.content.id ? ' to ' + this.content.id : ''}`)
                }
                else { Elem.info(`Class ${$class} added${this.content.id ? ' to ' + this.content.id : ''}`) }
                this.content.classList.add($class)
            }
        }
        return this
    }

    anim(target, callback, keepClass) {
        this.add(target)
        this.addevent(['animationend', () => { this.noevent('animationend'); callback?.call?.(this.content); keepClass || this.removeClass(target.class) }])
        return this
    }
    removeClass(...className) {
        for (let name of className) {
            if (!this.content.classList.contains(name)) {
                Elem.warn(`Class is not present: ${name}`)
            }

            this.content.classList.remove(name)
        }
        return this
    }
    addevent(...events) {
        if (!Array.isArray(events[0]) && typeof events[0] == 'object' && arguments.length === 1) {
            events = Object.entries(events[0])
        }
        for (let [eventName, event] of events) {
            Elem.listeners++
            if (!(eventName in this.eventNames)) {

                this.content.addEventListener(eventName, event)
                this.eventNames[eventName] = event
                Elem.info(`Event "${eventName}" added${this.content.id ? ' to  ' + this.content.id : ''}: \n${event.toString().replaceAll(`\n`, '').replaceAll(' ', '')}`)
            }
            else {
                Elem.warn(`Duplicate event listener: ${eventName} ${this.id ? 'on ' + this.id : ''}`)
            }
        }
    }
    noevent(...target) {
        for (let event of target) {
            this.content.removeEventListener(event, this.eventNames[event])
            if (!this.eventNames[event]) {
                Elem.warn(`No event found for "${event}"${this.content.id ? ' on ' + this.content.id : ''}`)
            } else {
                Elem.listeners--
                Elem.info(`Removing event "${event}" ${this.content.id ? 'from ' + this.content.id : ''}:\n${this.eventNames[event].toString()}`)
            }
            delete this.eventNames[event]
        }
    }
    kill() {
        this.noevent(...Object.keys(this.eventNames))
        if (this.content.id) {
            Elem.info(`Element ${this.content.id} was removed from body`)
        }
        Elem.debug(`Element removed`)
        delete Elem.tracking[this.#_label_]
        delete Elem[`#${this.id}`]
        this.killChildren()
        this?.parent?.children?.deleteWithin?.(this)
        Elem.elements.deleteWithin(this)
        this.content.remove()
        return this
    }
    killChildren() {
        while (this.children.length) {
            this.children.forEach(o => o.kill())
        }
        return this
    }

    hide(type) {
        this.addClass('hidden')
        return this
    }
    fadeOut() {
        this.anim({ class: 'fadeOut' }, () => this.content.style.opacity = 0)
    }
    fadeIn() {
        this.anim({ class: 'fadeIn' }, () => this.content.style.opacity = 1)
    }
    show() {
        this.removeClass('hidden')
        return this
    }
}
for (let attribute of Elem.attributes) {
    Object.defineProperty(Elem.prototype, `${attribute}`, {
        get() {
            return this.content.getAttribute(`${attribute}`)
        },
        set(val) {
           // Elem.info(`${attribute}=${val}${this.id ? '\non ' + this.id : ''}`)
            if (attribute === 'id') {
                if (Elem[`#${val}`]) Elem.warn(`Duplicate ID name: ${val}`);
                Elem[`#${val}`] = this
            }
            this.content.setAttribute(`${attribute}`, val)
        }
    });
}

function $search(query) {
    let result;
    if (query.includes('#')) {
        result = document.getElementById(query.replaceAll('#', ''))
    }
    else {
        result = document.querySelectorAll(query)
    }
    return result
}
