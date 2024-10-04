'use strict';
// "var" indicates the code is not mine.

/* Gif to webp: 

gif2webp file.gif -o file.webp

*/
/* Png to webp

cwebp file.png -o file.webp

*/

/* NUMBER STUFF */
Math.toRad = deg => deg * Math.PI / 180;
Math.toDeg = rad => rad * 180 / Math.PI;
Math.diff = (a, b) => Math.abs(a - b);
Math.clamp = (val, min, max) => { if (val > max) return max; if (val < min) return min; return val }

const ran = {
    choose: (...a) => a[Math.floor(Math.random() * a.length)],
    range: (min, max) => Math.random() * (max - min) + min,
    frange: (min, max) => Math.floor(ran.range(min, max))
}

const sane = {
    isInt: n => Math.trunc(n) === n,
    sanitize: num => (num == num) && num !== null && isFinite(num),
    equality: (...target) => target.every(o => Object.is(o, target[0])),
    arreq(...targets) {
        if (targets.length < 2) {
            throw RangeError('At least 2 arguments required.')
        }
        for (let i = 0, max = Math.max(...targets.map(o => o.length)) || 1; i < max; i++) {
            if (!Array.isArray(targets[i])) {
                throw TypeError(`arguments[${i}] is not an Array (${typeof arguments[i]})`)
            }
            for (let comparisons of targets) {
                if (!sane.equality(targets[0][i], comparisons[i])) {
                    return false
                }
            }
        }
        return true
    }
}


class Vector2 {
    x
    y
    constructor(x = 0, y = 0) {
        if (arguments.length === 1 && x instanceof new.target) {
            ({ x, y } = x)
        }
        Object.seal(this)
        this.set(x, y)
    }
    static distance(vector, vector2) {
        return Math.hypot(Vector2.x(vector) - Vector2.x(vector2), Vector2.y(vector) - Vector2.y(vector2))
    }
    static x(vectorLike) {
        return vectorLike.x ?? vectorLike[0] ?? Object.values(vectorLike)[0]
    }
    static y(vectorLike) {
        return vectorLike.y ?? vectorLike[1] ?? Object.values(vectorLike)[1]
    }
    static angle(first, second) {
        let firstAngle = Math.atan2(Vector2.y(first), Vector2.x(first))
        let secondAngle = Math.atan2(Vector2.y(second), Vector2.x(second))
        let angle = secondAngle - firstAngle
        return Math.abs(angle)
    }
    static average(...vectors) {
        let x = vectors.map(o => Vector2.x(o))
        let y = vectors.map(o => Vector2.y(o))
        return new Vector2(x.average(), y.average())
    }
    static difference(vector, vector2) {
        if (!Array.isArray(vector)) {
            vector = [...vector]
        }
        if (!Array.isArray(vector2)) {
            vector2 = [...vector2]
        }
        let out = [...vector]
        let length = out.length
        for (let i = 0; i < length; i++) {
            out[i] = Math.abs(vector2[i] - vector[i])
        }
        return new Vector2(...out)
    }
    static combine(vector, vector2) {
        if (!Array.isArray(vector)) {
            vector = [...vector]
        }
        if (!Array.isArray(vector2)) {
            vector2 = [...vector2]
        }
        let out = [...vector]
        let length = out.length
        for (let i = 0; i < length; i++) {
            out[i] = Math.abs(vector2[i] + vector[i])
        }
        return new Vector2(...out)
    }
    static get up() {
        return new Vector2(0, 1)
    }
    static get down() {
        return new Vector2(0, -1)
    }
    static get left() {
        return new Vector2(-1, 0)
    }
    static get right() {
        return new Vector2(1, 0)
    }
    static max(vector, vector2) {
        return new Vector2(Math.max(Vector2.x(vector2), Vector2.x(vector)), Math.max(Vector2.y(vector2), Vector2.y(vector)))
    }
    static min(vector, vector2) {
        return new Vector2(Math.min(Vector2.x(vector2), Vector2.x(vector)), Math.min(Vector2.y(vector2), Vector2.y(vector)))
    }
    static equals(...vectors) {
        let n = vectors.map(o => [Vector2.x(o), Vector2.y(o)])
        return sane.arreq(...n)
    }
    set(...numbers) {
        if (numbers.length === 1) {
            this.x = Vector2.x(numbers[0])
            this.y = Vector2.y(numbers[0])
            return
        }
        for (let i = 0; i < numbers.length; i++) {
            let n = numbers[i]
            if (n > Number.MAX_SAFE_INTEGER) n = Number.MAX_SAFE_INTEGER;
            else if (n < Number.MIN_SAFE_INTEGER) n = Number.MIN_SAFE_INTEGER;
            else n = +n
            if (Object.keys(this)[i] in this) {
                this[Object.keys(this)[i]] = n
            }
        }
    }
    pow(vector) {
        if (!Array.isArray(vector)) {
            vector = [...vector]
        }
        let length = this.value.length
        for (let i = 0; i < length; i++) {
            vector[i] = this[i] ** vector[i]
        }
        this.set(...vector)
        return this
    }
    add(vector) {
        if (!Array.isArray(vector)) {
            if (1 in arguments) {
                vector = [vector, arguments[1]]
            }
            vector = [...vector]
        }
        let length = this.value.length
        for (let i = 0; i < length; i++) {
            vector[i] = this[i] + vector[i]
        }
        this.set(...vector)
        return this
    }
    subtract(vector) {
        if (!Array.isArray(vector)) {
            if (1 in arguments) {
                vector = [vector, arguments[1]]
            }
            vector = [...vector]
        }
        let length = this.value.length
        for (let i = 0; i < length; i++) {
            vector[i] = this[i] - vector[i]
        }
        this.set(...vector)
        return this
    }
    multiply(vector) {
        if (!Array.isArray(vector)) {
            if (1 in arguments) {
                vector = [vector, arguments[1]]
            }
            vector = [...vector]
        }
        let length = this.value.length
        for (let i = 0; i < length; i++) {
            vector[i] = this[i] * vector[i]
        }
        this.set(...vector)
        return this
    }
    divide(vector) {
        if (!Array.isArray(vector)) {
            if (1 in arguments) {
                vector = [vector, arguments[1]]
            }
            vector = [...vector]
        }
        let length = this.value.length
        for (let i = 0; i < length; i++) {
            vector[i] = this[i] / vector[i]
        }
        this.set(...vector)
        return this
    }
    normalize() {
        this.set(...this.normalized)
    }
    randomize() {
        this.set(ran.range(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER), ran.range(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER))
    }
    negate() {
        this.set(...this.negated)
    }
    invert() {
        this.set(...this.inverse)
    }
    lerp({ to, time = 0.1 }) {
        let sum = (this.minus(to)).multiply(time, time)
        this.subtract(sum)
    }
    minus(other) {
        return new Vector2(this).subtract(other)
    }
    get average() {
        return /*[...this]*/[this.x, this.y].average()
    }
    get inverse() {
        return new Vector2(this.x ** -1, this.y ** -1)
    }
    get negated() {
        return new Vector2(-this.x, -this.y)
    }
    get normalized() {
        return new Vector2(...this.value.map(o => o / this.magnitude || 0))
    }
    get magnitude() {
        return this.value.reduce((a, b) => Math.abs(a + b))
    }
    get sqrtMag() {
        return Math.sqrt(this.magnitude)
    }
    get value() {
        return [this.x, this.y]//Object.values(this)
    }
    toString() {
        return `(${this.value.join(', ')})`
    }
    get '0'() {
        return this.x
    }
    get '1'() {
        return this.y
    }
    *[Symbol.iterator]() {
        yield this.x
        yield this.y
        //    yield* this.value
    }
}
/*class Vector3 extends Vector2 {
    z
    constructor(x = 0, y = 0, z = 0) {
        super()
        if (arguments.length === 1 && x instanceof new.target) {
            ({z}=x)
        }
        this.set(x, y, z)
    }
    get '2'() {
        return this.z
    }
}*/
Number.prototype.comma = function () {
    return `${this}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/* STRING STUFF */
String.prototype.last = Array.prototype.last = function () {
    return this[this.length - 1]
}
String.prototype.shorten = function (len = 32) {
    let newstr = this
    if (newstr.length > len) {
        newstr = newstr.slice(0, len)
    }
    return newstr
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
String.prototype.reverse = function () {
    return [...this].reverse().join("")
}
String.prototype.upper = function () {
    return this[0].toUpperCase() + this.slice(1)
}
/* ARRAY STUFF */
Array.prototype.insertAt = function (item, index) {
    return this.splice(index, 0, item), this
};
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
Array.prototype.average = function (type) {
    if (!this.length) return NaN; // Handle empty array case
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
Array.prototype.swap = function (a, b) {
    [this[a], this[b]] = [this[b], this[a]]
    return this
}
Array.prototype.swapWithin = function (a, b) {
    let slot = this.indexOf(a),
        slot2 = this.indexOf(b);
    if (slot !== -1 && slot2 !== -1) {
        this.swap(slot, slot2)
    }
    return this
}
Array.prototype.delete = function (index) {
    this.splice(index, 1)
    return this
}
Array.prototype.deleteWithin = function (index) {
    let slot = this.indexOf(index)
    if (slot !== -1) {
        this.delete(slot)
    }
    return this
}
Array.prototype.shuffle = function () {
    let n = this.length;
    let ammo = [...Array(n).keys()]; // Create an array with indices [0, 1, 2, ..., n-1]
    let out = [];
    while (ammo.length) {
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










/* MISC FUNCTIONS */
function gen(len = 6) {
    let str;
    do {
        str = ''
        for (let i = len; i--;) str += ran.choose(..._alphabet, ..._numbers, ..._ALPHABET);
    } while (gen.previouslyGenerated.has(str))
    gen.previouslyGenerated.add(str)
    return str
}
gen.previouslyGenerated = new Set
let _alphabet = 'qwertyuiopasdfghjklzxcvbnm', _numbers = '0123456789',
    _ALPHABET = _alphabet.toUpperCase();
function getNodeSize(node) {
    let t = node.getBoundingClientRect()
    t.center = {
        x: t.left + t.width / 2,
        y: t.top + t.height / 2
    }
    return t
}
async function getDataUrl(url) {
    let response;
    try {
        response = await fetch(url, {
            method: 'GET',
            mode: 'cors'
        })
        if (!response.ok) {
            Elem.error(`Failed to fetch image. Status: ${response.status}`);
            throw '';
        }
    } catch (e) {
        Elem.error(`Image Error: ${url} - ${e.message}`);
        throw '';
    }
    let data;
    try {
        data = await response.blob();
    } catch (e) {
        Elem.error(`Failed to convert response to blob: ${e.message}`);
        return '';
    }
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(data); // Convert blob to data URL
    });
}
function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    var viewWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0) && !(rect.right < 0 || rect.left - viewWidth >= 0);
}
checkVisible.blured = false;
function padZero(str, len = 2) {
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}
//addEventListener('blur', ()=>checkVisible.blured=true)
//addEventListener('focus', ()=>checkVisible.blured=false)

/* CLASSES */
class Elem {
    age = Date.now()
    static textStyle(message, options) {
        //  this.history[message] ??= 0
        // this.history[message]++
        console.log(`%c ${message}`, `background: ${options.color};color: ${options.textColor ?? '#000000'};font-style: ${options.font};font-size: ${options.size ?? 15}px;`)
    }
    styleMe(...prop) {
        if (!Array.isArray(prop[0]) && typeof prop[0] == 'object' && arguments.length === 1) {
            prop = Object.entries(prop[0])
        }
        for (let [propName, propValue] of prop) {
            this.content.style.setProperty(propName, propValue)
        }
    }
    static noConsole() {
        console.warn(`No console mode was enabled, which means if you're reading this it was probably not on purpose (for obvious reasons)`)
        addEventListener('keydown', function () {
            let __value__
            if (arguments[0]?.key?.toLowerCase?.() === 'backspace') {
                try {
                    prompt('Return Value:', eval?.('"use strict";' + (__value__ = prompt('Input eval code...'))))
                }
                catch (error) {
                    prompt(error.constructor.name, error.message)
                }
                finally {
                    navigator.clipboard.writeText(__value__)
                }
            }
        })
        delete this.noConsole
    }
    //   static history = {}
    static loaded = new Set;
    static failed = new Set;
    static bulk(callback, ...src) {
        let parse = [callback]
        for (let li of src) {
            parse.unshift(li)
            Elem.img(li,
                (s)=>{
                    parse.deleteWithin(s);
                    if (parse.length===1) {
                        parse[0](...src)
                    }
                })
        }
    }
    static img(src, callback) {
        if (Elem.loaded.has(src)) {
            return src
        }
        if (!src) {
            throw TypeError('No source for image provided.')
        }
        let x = new Image()
        x.src = src
        x.onerror = function (err) {
            console.error('Error: ', err)
            Elem.error(`Image error: ${src}`)
            Elem.failed.add(src)
        }
        x.onload = () => {
            callback?.(src)
            Elem.success(`Image Pre-loaded: ${src}`)
            Elem.loaded.add(src)
        }
        Elem.info(`Preloading Image: ${src}`)
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
    /*static canvas = class extends this {
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

    }*/
    static clear() {
        while (Elem.elements.size) Elem.elements.forEach(o => o.kill())
    }
    static attributes = ['for', 'multiple', 'disabled', 'href', 'draggable', 'label', 'innerText', 'innerHTML', 'type', 'action', 'method', 'required', 'download', 'style', 'autobuffer', 'value', 'loading', 'name', 'checked', 'src', 'maxLength', 'accept', 'placeholder', 'title', 'controls', 'id', 'readonly', 'width', 'height', 'frameborder', 'allow', 'allowfullscreen']
    static {
        for (let attribute of this.attributes) {
            Object.defineProperty(this.prototype, `${attribute}`, {
                get() {
                    return this.content[`${attribute}`]
                },
                set(val) {
                    // Elem.info(`${attribute}=${val}${this.id ? '\non ' + this.id : ''}`)
                    if (attribute === 'id') {
                        if (Elem[`#${val}`]) Elem.warn(`Duplicate ID name: ${val}`);
                        Elem[`#${val}`] = this
                    }
                    else if (attribute === 'style') {
                        Elem.warn(`Use "styles" instead of "style"`)
                    }
                    this.content[`${attribute}`] = val
                }
            });
        }

    }
    static $(query) {
        if (query.includes('#')) {
            Elem.warn(`Use あ['${query}'] instead of あ.$`)
            return document.getElementById(query.replace('#', ''))?.content
        } else {
            let arr = []
            for (let element of document.querySelectorAll(query)) {
                arr.push(element.content)
            }
            return arr
        }
    }
    static listeners = 0;
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
        return true
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
            Elem.warn(`"${msg}" currently does not exist withinto the documents Style Sheets`)
        }
    }
    static elements = new Set
    static logLevels = {
        debug: false,
        warn: false,
        error: false,
        info: false,
        success: false,
    }
    static select(element) {
        let out = new Elem({ self: element })
        if (out.content.children) {
            for (let node of out.content.children) {
                if (node.nodeName.match(/NOSCRIPT|SCRIPT/)) continue
                if ('content' in node && node instanceof Elem) {
                    //out.children.push(node)
                    // node.content.parent = out
                }
                else {
                    let f = Elem.select(node)
                    //    f.parent = out
                }
            }
        }
        return out
    }
    static {
        let body = window.body = this.select(document.body);
        let head = [...document.head.children]
        let charSet = false, name = false, ogDesc = false, ogImage = false, ogUrl = false, viewport = false, ogTitle
        head.forEach(o => {
            let butes = o.attributes
            if (butes.charset) charSet = true
            if (butes.name) name = true;
            if (butes[0]?.textContent === 'og:description') ogDesc ||= true
            if (butes[0]?.textContent === 'og:image') ogImage ||= true
            if (butes[0]?.textContent === 'og:url') ogUrl ||= true
            if (butes[0]?.textContent === 'og:title') ogTitle ||= true
            if (butes[0]?.nodeValue === 'viewport' && butes[1]?.nodeValue) viewport ||= true
        })
        if (document.title?.match?.(/Untitled|Document/) || !document.title?.replaceAll?.(' ', '')) console.warn('Consider giving this document a title.')
        if (!charSet) console.warn('🔎 Consider adding <meta charset="UTF-8"> into the head of this document.')
        if (!viewport) console.warn('🔎 Consider adding <meta name="viewport" content="width=device-width, initial-scale=1"> into the head of this document.')
        if (!ogImage) console.warn('🔎 Consider adding <meta property="og:image" content="[image url here]"> into the head of this document.')
        if (!ogTitle) console.warn('🔎 Consider adding <meta property="og:title" content="[title here]"> into the head of this document.')
    }
    clone({ deep = true, parent }) {
        return new this.constructor({ parent, self: this.content.cloneNode(deep) })
    }
    constructor(opts, immediate) {
        if (!opts?.tag && !opts.self) {
            Elem.error('No tag was provided so i cannot make the new node.')
            return
        }
        if (Elem.logLevels.debug && !opts.self) {
            let arr = ''
            for (let [key, value] of Object.entries(opts)) {
                if (typeof value == 'object') {
                    value = Object.entries(value)
                    let str = ''
                    for (let [_key, _value] of value) {
                        str += `${_key}: ${_value}\n`
                    }
                    value = str
                }
                arr += `${key}="${value}" `.replaceAll('\n', '').replaceAll(' ', '')
            }
            Elem.debug(`New <${opts.tag}> element:\n ${arr}`)
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
        if (opts.self) {
            this.content = opts.self
            opts.self.getAttribute('id') && (opts.id = opts.self.getAttribute('id'))
        }
        else {
            this.content = document.createElement(opts.tag)
        }
        Elem.elements.add(this)
        this.content.content = this
        for (let attr of Elem.attributes) {
            if (attr in opts) this[attr] = opts[attr]
        }
        if (opts.text) {
            this.innerHTML = opts.text
        }
        if (opts.message) {
            this.innerText = opts.message
        }
        //this.parent = null
        //this.children = []
        Object.defineProperties(this.children, {
            switch: {
                enumerable: false,
                value(first, second) {
                    if (first.index > second.index) first.putBefore(second)
                    else second.putBefore(first)
                }
            },
            replace: {
                value(OUT, IN) {
                    let outdex = typeof OUT === 'number' ? OUT : this.indexOf(OUT)
                    if (outdex > -1) {
                        IN.parent = this
                        OUT.parent = null
                        this[outdex] = IN
                    }
                },
                enumerable: false
            }
        })
        opts.style?.forEach?.(o => this.content.style[o] = opts.style[o])
        if (opts.id) {
            Elem[`#${opts.id}`] = this
        }
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
        if (opts.styles) {
            if (!Array.isArray(opts.styles)) {
                opts.styles = Object.entries(opts.styles)
            }
            this.styleMe(...opts.styles)
        }
        if (opts.parent) {
            if (typeof opts.parent == 'string') opts.parent = Elem[`#${opts.parent}`]
            this.append(opts.parent)
        }
        this.current = this.content
        if (immediate) {
            this.append(body)
        }
        if (opts.children) {
            for (let kid of opts.children) {
                kid.append(this)
                //this.children.push(kid)
                // kid.parent = this
            }
        }
        opts.start?.call?.(this)
    }
    append(p) {
        p.content.append(this.content)
    }
    prepend(p) {
        p.content.prepend(this.content)
    }

    get parent() {
        return this.content.parentElement?.content ?? null
    }
    get childCount() {
        return this.children.length
    }
    get children() {
        return [...this.content.children].filter(o => !(o.tagName.match(/SCRIPT|NOSCRIPT/))).map(o => o.content)
    }
    get parent() {
        return this.content.parentNode?.content ?? null
    }
    get previous() {
        return this.content.previousElementSibling?.content ?? null
    }
    get next() {
        return this.content.nextElementSibling?.content ?? null
    }
    get firstChild() {
        return this.content.firstElementChild?.content ?? null
    }

    get index() {
        return this.parent?.children?.indexOf?.(this) ?? null
    }
    addClass(...className) {
        this.add({ class: className })
        return this
    }
    add(props) {
        if (props.class) {
            if (typeof props.class === 'string') {
                props.class = [props.class]
            }

            for (let $class of props.class) {
             /*   if (!Elem.findClass($class)) {
                    Elem.messages.noclass($class)
                } else if ([...this.content.classList].includes($class)) {
                    Elem.warn(`Class ${$class} already added${this.content.id ? ' to ' + this.content.id : ''}`)
                }
                else { Elem.info(`Class ${$class} added${this.content.id ? ' to ' + this.content.id : ''}`) }*/
                if ($class === 'fadeIn') this.toggle('fadeOut',false)
                    if ($class === 'fadeOut') this.toggle('fadeIn',false)

                this.toggle($class,true)
            }
        }
        return this
    }
    anim(target, callback, removeClass) {
        this.add(target)
        this.addevent(['animationend', () => { this.noevent('animationend'); callback?.call?.(this); removeClass && this.removeClass(target.class) }])
        return this
    }
    removeClass(...className) {
        for (let name of className) {
            if (!this.content.classList.contains(name)) {
                Elem.warn(`Class is not present: ${name}`)
            }
            this.toggle(name,false)
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
                let f = (e) => {
                    event.call(this, e)
                }
                this.content.addEventListener(eventName, f)
                this.eventNames[eventName] = f
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
        if (this.id) {
            Elem.info(`Element ${this.id} was removed from body`)
        }
        Elem.debug(`Element removed`)
        this.ondeath?.()
        delete Elem[`#${this.id}`]
        this.killChildren()
        this?.parent?.children?.deleteWithin?.(this)
        Elem.elements.delete(this)
        if (body !== this) {

            this.content.remove?.()
        }
        return
    }
    killChildren() {
        let c = this.children

        c.forEach(o => {
            while (this.content.contains(o?.content)) o.kill()
        })

        return this
    }
    hide() {
        this.toggle('hidden',true)
        return this
    }
    show() {
        this.toggle('hidden',false)
        return this
    }
    toggle($,force) {
        this.content.classList.toggle($,force)
    }
    fadeOut(callback) {
        this.anim({ class: 'fadeOut' }, () => { this.content.style.opacity = 0; callback?.call?.(this) })
    }
    fadeIn(callback) {
        this.anim({ class: 'fadeIn' }, () => { this.toggle('fadeIn',false);this.content.style.opacity = 1; callback?.call?.(this) })
    }
   
}


class SceneryElem extends Elem {
    static all = new Set
    static update() {
        this.all.forEach(o => {
            if (Elem.elements.has(o)) o.#update();
            else return this.all.delete(o)
        })
    }
    position = new Vector2
    rotation = 0;
    angular = 0;
    #mirror = 0;
    #lifetime = 0;
    #hasBeenSeen = false;
    flip() { this.#mirror += 180 }
    velocity = new Vector2
    constructor(opts = {}, i) {
        opts.tag ??= 'div'
        super(opts, i)
        new.target.all.add(this)
        this.styleMe({ position: 'absolute', margin: 'auto' })
        this.position.set(+opts.x || 0, +opts.y || 0)
        this.#update()
    }
    rotate(rot = 0) {
        this.rotation += rot
    }
    setAV(speed = 0) {
        this.angular = speed
    }
    outofbounds() {
        this.kill()
    }
    #update() {
        this.#lifetime++
        if (this.#lifetime > 1) {
            if (!checkVisible(this.content)) {
                if (this.#hasBeenSeen) this.outofbounds?.()
            } else this.#hasBeenSeen = true
            this.update?.()
        }

        this.styleMe({
            'transform': `
            rotateY(${this.#mirror}deg) 
            translate(${(this.position.x)}px, ${(this.position.y)}px)`,
            'transform-origin': 'center',

        })
        this.rotate(this.angular)
        this.position.add(this.velocity)
        // Do not use this ⤵️
        //  this.style.left = `${Math.trunc(this.position.x)}px`
        //  this.style.top = `${Math.trunc(this.position.y)}px`
    }

}
/* COLOR (goes last because it's so long) */
const color = Object.defineProperties({
    "aliceblue": "#f0f8ff",
    "antiquewhite": "#faebd7",
    "aqua": "#00ffff",
    "aquamarine": "#7fffd4",
    "azure": "#f0ffff",
    "beige": "#f5f5dc",
    "bisque": "#ffe4c4",
    "black": "#000000",
    "blanchedalmond": "#ffebcd",
    "blue": "#0000ff",
    "blueviolet": "#8a2be2",
    "brown": "#a52a2a",
    "burlywood": "#deb887",
    "cadetblue": "#5f9ea0",
    "chartreuse": "#7fff00",
    "chocolate": "#d2691e",
    "coral": "#ff7f50",
    "cornflowerblue": "#6495ed",
    "cornsilk": "#fff8dc",
    "crimson": "#dc143c",
    "cyan": "#00ffff",
    "darkblue": "#00008b",
    "darkcyan": "#008b8b",
    "darkgoldenrod": "#b8860b",
    "darkgray": "#a9a9a9",
    "darkgreen": "#006400",
    "darkkhaki": "#bdb76b",
    "darkmagenta": "#8b008b",
    "darkolivegreen": "#556b2f",
    "darkorange": "#ff8c00",
    "darkorchid": "#9932cc",
    "darkred": "#8b0000",
    "darksalmon": "#e9967a",
    "darkseagreen": "#8fbc8f",
    "darkslateblue": "#483d8b",
    "darkslategray": "#2f4f4f",
    "darkturquoise": "#00ced1",
    "darkviolet": "#9400d3",
    "deeppink": "#ff1493",
    "deepskyblue": "#00bfff",
    "dimgray": "#696969",
    "dodgerblue": "#1e90ff",
    "firebrick": "#b22222",
    "floralwhite": "#fffaf0",
    "forestgreen": "#228b22",
    "fuchsia": "#ff00ff",
    "gainsboro": "#dcdcdc",
    "ghostwhite": "#f8f8ff",
    "gold": "#ffd700",
    "goldenrod": "#daa520",
    "gray": "#808080",
    "grey": "#808080",
    "green": "#008000",
    "greenyellow": "#adff2f",
    "honeydew": "#f0fff0",
    "hotpink": "#ff69b4",
    "indianred": "#cd5c5c",
    "indigo": "#4b0082",
    "ivory": "#fffff0",
    "khaki": "#f0e68c",
    "lavender": "#e6e6fa",
    "lavenderblush": "#fff0f5",
    "lawngreen": "#7cfc00",
    "lemonchiffon": "#fffacd",
    "lightblue": "#add8e6",
    "lightcoral": "#f08080",
    "lightcyan": "#e0ffff",
    "lightgoldenrodyellow": "#fafad2",
    "lightgray": "#d3d3d3",
    "lightgreen": "#90ee90",
    "lightpink": "#ffb6c1",
    "lightsalmon": "#ffa07a",
    "lightseagreen": "#20b2aa",
    "lightskyblue": "#87cefa",
    "lightslategray": "#778899",
    "lightsteelblue": "#b0c4de",
    "lightyellow": "#ffffe0",
    "lime": "#00ff00",
    "limegreen": "#32cd32",
    "linen": "#faf0e6",
    "magenta": "#ff00ff",
    "maroon": "#800000",
    "mediumaquamarine": "#66cdaa",
    "mediumblue": "#0000cd",
    "mediumorchid": "#ba55d3",
    "mediumpurple": "#9370db",
    "mediumseagreen": "#3cb371",
    "mediumslateblue": "#7b68ee",
    "mediumspringgreen": "#00fa9a",
    "mediumturquoise": "#48d1cc",
    "mediumvioletred": "#c71585",
    "midnightblue": "#191970",
    "mintcream": "#f5fffa",
    "mistyrose": "#ffe4e1",
    "moccasin": "#ffe4b5",
    "navajowhite": "#ffdead",
    "navy": "#000080",
    "oldlace": "#fdf5e6",
    "olive": "#808000",
    "olivedrab": "#6b8e23",
    "orange": "#ffa500",
    "orangered": "#ff4500",
    "orchid": "#da70d6",
    "palegoldenrod": "#eee8aa",
    "palegreen": "#98fb98",
    "paleturquoise": "#afeeee",
    "palevioletred": "#db7093",
    "papayawhip": "#ffefd5",
    "peachpuff": "#ffdab9",
    "peru": "#cd853f",
    "pink": "#ffc0cb",
    "plum": "#dda0dd",
    "powderblue": "#b0e0e6",
    "purple": "#800080",
    "rebeccapurple": "#663399",
    "red": "#ff0000",
    "rosybrown": "#bc8f8f",
    "royalblue": "#4169e1",
    "saddlebrown": "#8b4513",
    "salmon": "#fa8072",
    "sandybrown": "#f4a460",
    "seagreen": "#2e8b57",
    "seashell": "#fff5ee",
    "sienna": "#a0522d",
    "silver": "#c0c0c0",
    "skyblue": "#87ceeb",
    "slateblue": "#6a5acd",
    "slategray": "#708090",
    "snow": "#fffafa",
    "springgreen": "#00ff7f",
    "steelblue": "#4682b4",
    "tan": "#d2b48c",
    "teal": "#008080",
    "thistle": "#d8bfd8",
    "tomato": "#ff6347",
    "turquoise": "#40e0d0",
    "violet": "#ee82ee",
    "wheat": "#f5deb3",
    "white": "#ffffff",
    "whitesmoke": "#f5f5f5",
    "yellow": "#ffff00",
    "yellowgreen": "#9acd32"
}, {
    //Darken Hex Colour
    dhk: { value(e, f = 40) { let $ = parseInt((e = e.replace(/^#/, "")).substring(0, 2), 16), a = parseInt(e.substring(2, 4), 16), r = parseInt(e.substring(4, 6), 16); return $ = Math.round($ * (1 - f / 100)), a = Math.round(a * (1 - f / 100)), r = Math.round(r * (1 - f / 100)), $ = Math.min(255, Math.max(0, $)), a = Math.min(255, Math.max(0, a)), r = Math.min(255, Math.max(0, r)), "#" + [$, a, r].map(e => { let f = e.toString(16); return 1 === f.length ? "0" + f : f }).join("") }, enumerable: !1 },
    choose: { value() { return ran.choose(...Object.values(this)) }, enumerable: !1 },
    //Log colour to console
    log: { value(e) { console.log(`%c ${e}`, `color: ${e};font-size: 100px; background-color: ${e}`) }, enumerable: !1 },
    opposite: { value(e) { if (0 === e.indexOf("#") && (e = e.slice(1)), 3 === e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), 6 !== e.length) throw Error("Invalid HEX color."); let f = (255 - parseInt(e.slice(0, 2), 16)).toString(16), $ = (255 - parseInt(e.slice(2, 4), 16)).toString(16), a = (255 - parseInt(e.slice(4, 6), 16)).toString(16); return "#" + padZero(f) + padZero($) + padZero(a) }, enumerable: !1 }
});
Object.assign(color, {
    //Extra colors go here
})
const body = window.body