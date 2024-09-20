'use strict';
document.querySelector('progress').remove()
let あ = Elem, r = color
あ.logLevels.debug = あ.logLevels.warn = あ.logLevels.error = あ.logLevels.info = あ.logLevels.success = true
const canvas = new あ({ tag: 'canvas', id: 'bg' }, true),
    ctx = canvas.content.getContext('2d');
const { sin, cos } = Math;
let path =  new Path2D(`M601 2099 c-66 -13 -178 -70 -244 -123 -160 -131 -235 -369 -177
    -558 41 -133 125 -220 334 -347 344 -209 604 -431 728 -622 17 -27 34 -49 38
    -49 3 0 26 30 50 66 52 79 215 248 325 336 98 79 295 214 430 293 113 67 229
    174 265 245 73 142 64 339 -23 490 -94 165 -294 280 -487 280 -209 0 -409
    -126 -500 -315 -21 -44 -41 -101 -45 -127 -8 -61 -21 -61 -30 -1 -16 106 -106
    251 -200 322 -138 104 -299 142 -464 110z m209 -39 c180 -28 355 -182 406
    -358 9 -29 26 -65 39 -80 23 -26 24 -26 44 -8 11 10 28 41 37 70 50 152 145
    266 276 330 296 145 657 -23 733 -340 39 -161 -1 -310 -110 -420 -45 -44 -78
    -67 -260 -180 -278 -172 -487 -345 -629 -522 -32 -39 -62 -72 -66 -72 -4 0
    -32 30 -62 68 -162 199 -384 376 -760 605 -159 98 -244 218 -255 360 -12 155
    37 289 146 398 127 126 282 177 461 149z`);
  
window.canvas = canvas;
canvas.ctx = ctx
canvas.resize = function () { 
    if (this.content.width !== window.innerWidth) {
        this.content.width = window.innerWidth; 
    }
    if (this.content.height !== window.innerHeight) {
        this.content.height = window.innerHeight; 
    }
  }; canvas.frame = 0; canvas.toKill = []; canvas.all = [];
canvas.update = function () {
    requestAnimationFrame(canvas.update); canvas.frame++; canvas.resize(); ctx.clearRect(0, 0, canvas.content.width, canvas.content.height)
    canvas.toKill.forEach(o => canvas.all.deleteWithin(o)); canvas.toKill = []
    for (let context of [canvas.ctx]) {
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.lineCap = ctx.lineJoin = 'round';
        context.lineWidth = 1;
        context.textRendering = 'optimizeSpeed'
     //   context.filter = "drop-shadow(0px 0px 3px #FFF)";

    }
    canvas.all/*.sort((a,b)=>a.layer-b.layer)*/.forEach(o => {
        ctx.beginPath()
        ctx.rect(-100, 0, canvas.content.width * 2, canvas.content.height * 1.5)
        if (!ctx.isPointInPath(o.x, o.y)) {
            o.kill()
        }

        o.draw?.(canvas.frame, o.set.ctx)

    });
    if (!(canvas.frame % 1000) || canvas.frame === 1) {
        canvas.addParticles()
    }
    (canvas.frame % 50) || ((o => {

        let x = new a({
            x: canvas.content.width + 100, y: ran.range(0, canvas.content.height), shape: [ran.frange(0, 7), [
                '𝓜𝓦𝓐𝓗',
                '(˶˃ ᵕ ˂˶) .ᐟ.ᐟ',
                '(˶ˆᗜˆ˵)',
                '૮ • ﻌ - ა',
                '⋆˚ʚɞ',
                'xoxo',
                'cute',
                '♬♩♪♩',
                '‧₊˚❀༉‧₊˚.',
                '・❥・', 'ᕙ(‾̀◡‾́)ᕗ', 'ଘ(੭*ˊᵕˋ)੭* ̀ˋ', 'ଘʕ੭·͡ᴥ·ʔ﻿ ੭', '(ΦзΦ) ♡', '★⌒ヽ(●’､＾●)Kiss!', '(*^ ‿ <*)♡'].pick()].pick(), size: 20 + ran.range(1, 10)
        })
        x.velocity =
            { x: ran.frange(1, 5), y: 0, a: ran.range(-0.1, 0.1), s: 0, o: 0 }

    })())

}
class a {

    velocity = { x: 0, y: 0, a: 0, s: 0, o: 0 }; layer = 0; fill = false; random2 = ran.range(-1, 1); random = ran.range(-1, 1); glow = true; angle = 0; opacity = 1; constructor(o) {
        //  setTimeout(()=>this.kill(),30000)
        this.set = o.set ?? canvas
        this.set.all.push(this)
        this.x = o.x ?? 0; this.y = o.y ?? 0; this.size = o.size ?? 10; this.shape = o.shape ?? 3; this.color = o.color ?? Object.values(r).pick()
    }
    draw(f, v) {

        this.x -= this.velocity.x; this.y -= this.velocity.y; this.angle += this.velocity.a; this.size += this.velocity.s;
        //    this.x < -100 - this.size || this.x > (this.set.content.width + this.size + 100) && this.kill()
        //   this.y < -100 - this.size || this.y > (this.set.content.height + this.size + 100) && this.kill()
        if (this.opacity <= 0) {
            this.kill()
            return
        }
        this.opacity -= this.velocity.o
        this.opacity = Math.max(0, this.opacity)
        v.save()
        v.globalAlpha = this.opacity
        v.translate(this.x, this.y)
        v.rotate(this.angle)
        v.beginPath()
        if (this.glow) {
            v.shadowColor = this.color
            //       v.shadowBlur = 5
        }
        v.strokeStyle = v.fillStyle = this.color

        if (!this.shape || this.shape === 1) { ctx.arc(0, 0, this.size, 0, Math.PI * 2) }
        else if (this.shape == 'bg') {
            this.fill ||= true
            let pos = {
                x: this.random > 0 ? cos(f / 100) : sin(f / 100),
                y: this.random > 0 ? sin(f / 100) : cos(f / 100),
            }
            v.globalAlpha = Math.min(f / 100, this.opacity)
            v.arc(pos.x * this.size * 2, pos.y * this.size * 2, this.size * 10, 0, Math.PI * 2)
        }
        else if (this.shape == '[heart]') {
        v.beginPath()
        /*v.scale(0.04,0.04)
        v.rotate(Math.PI)
           v.translate(0,-3000)
         v.fill(path)
         v.stroke(path)*/
         v.arc(0,0,this.size,0,Math.PI*2)
         v.stroke()

        }
        else if (this.shape == '[sparkle]') {
            v.beginPath()
            v.moveTo(0,this.size)
            v.lineTo(0,-this.size)
            v.moveTo(this.size,0)
            v.lineTo(-this.size,0)

            v.stroke()
    
            }
        else if (typeof this.shape === 'string') {
            if (this.set === canvas) {
                v.rotate(-this.angle)
            }
            v.font = `${this.size * 1.2}px monospace`
            if (this.shape.match(/cute/) && this.glow) {
                (f % 80) || (() => {
                    (this.color = Object.values(r).pick())
                    let x = new a({ shape: this.shape, size: this.size, x: this.x, y: this.y, color: this.color })
                    x.velocity.s = 0.7
                    x.glow = false
                    x.velocity.x = this.velocity.x
                    x.velocity.o = 0.01
                })()
            }

            v.strokeText(this.shape, 0, 0)
            if (this.fill) v.fillText(this.shape, 0, 0)

        }
        else {
            v.moveTo(0, this.size)
            for (let i = 0, s = this.shape; i < s; i++) {
                v.rotate(Math.PI * 2 / s)
                v.lineTo(0, this.size)
            }
        }
        v.stroke()
        if (this.fill) v.fill();
        v.clip()
        v.restore()
    }
    kill() {
        this.set.toKill.includes(this) || this.set.toKill.push(this)
    }
}
new あ({
    start() {
        this.anim({ class: 'bounce-in-top' },
            () => {
                canvas.update();
                for (let i = 30; i--;) {
                    let z = new a({ shape: '[heart]', x: ran.range(0, canvas.width), y: canvas.height })
                    z.velocity.y = ran.range(1, 5)
                    z.velocity.s = 0.1
                    z.fill = true
                    z.velocity.o = 0.004
                }
                addEventListener('mousedown', (ev) => {
                    let x = new a({ shape: 0, size: 1, x: ev.x, y: ev.y, color: '#FFFFFF' })
                    x.velocity.s = 1
                    x.velocity.o = 0.01
                    for (let i = 10; i--;) {
                        let n = new a({ shape: '[sparkle]', size: ran.frange(5, 10), color: r.pink, x: ev.x, y: ev.y })
                        n.velocity.x = ran.range(-1, 1)
                        n.velocity.y = ran.range(-1, 1)
                        n.velocity.a=ran.range(-0.01,0.01)
                        n.velocity.o = 0.005
                    }
                })
                new あ({
                    tag: 'img', src: Elem.img('./media/hearticon.webp'), class: ['emoji', 'clickable'], start() { this.fadeIn() }, id: 'foot', events: {
                        click() {
                            this.content.noevent('click')
                            this.content.removeClass('clickable')
                            this.content.fadeOut()
                            あ['#main'].fadeOut(thanks)
                        }
                    }
                }, true)


            })
    },
    tag: 'div', id: 'main', children: [
        new あ({ tag: 'p', class: ['fancy'], text: '<img class="emoji"  src="./media/stars.webp"> Favourite Things <img class="emoji" src="./media/stars.webp">' }),
        new あ({
            tag: 'div', class: ['holder'], id: 'color', style: 'background-color:#20a6a6', children: [
                new あ({
                    tag: 'div', children: [
                        new あ({ tag: 'p', text: 'Color: <b>Teal</b>' }),
                        new あ({
                            tag: 'input', type: 'color', class: ['clickable'], events: [
                                ['change', function () {
                                    あ.$('#color').content.style.backgroundColor = this.value
                                }]
                            ], value: '#20a6a6'
                        })
                    ]
                }),
            ]
        }),

        new あ({
            tag: 'div', class: ['holder'], style: 'background-color:yellow', children: [
                new あ({
                    tag: 'div', children: [
                        new あ({ tag: 'p', style: 'color: black', text: 'Fruit:' }),
                        new あ({
                            tag: 'h2', style: 'color: black', class: ['clickable'], text: '🍋Lemon🍋', events: [
                                ['click', () => {
                                    for (let i = 10; i--;) {
                                        let x = new a({ x: canvas.content.width + 100, y: ran.range(0, canvas.content.height), shape: '🍋', size: 20 + ran.range(1, 10) })
                                        x.velocity = { x: ran.frange(1, 5), y: 0, a: ran.range(-0.1, 0.1), s: 0, o: 0 }

                                    }

                                }]
                            ]
                        }),
                    ]
                }),
            ]
        }),

        new あ({
            tag: 'div', class: ['holder'], style: 'background-color:green', children: [
                new あ({
                    tag: 'div', children: [
                        new あ({ tag: 'p', text: 'Hobby: <b>Code (JavaScript)</b>' }),
                        new あ({
                            tag: 'img', class: ['clickable', 'preview'], src: './media/js.webp', events: {
                                click() {
                                    this.content.anim({ class: 'rotate-center', }, () => {
                                        for (let i = 10; i--;) {
                                            let x = new a({ x: canvas.content.width + 100, y: ran.range(0, canvas.content.height), shape: 'JavaScript', size: 20 + ran.range(1, 10) })
                                            x.velocity = { x: ran.frange(1, 5), y: 0, a: ran.range(-0.1, 0.1), s: 0, o: 0 }

                                        }
                                    })
                                }
                            }, style: 'border-radius: 10%;'
                        })
                        /*      new あ({
                                  tag: 'div', id: 'code', events: [
                                      ['click', newName]
                                  ], children: [
                                      new あ({ tag: 'code', style: 'color: yellow', class: ['raw'], text: 'function ' }),
                                      new あ({ tag: 'code', style: 'color: pink', class: ['raw'], text: 'newName' }),
                                      new あ({ tag: 'code', style: 'color: orange', class: ['raw'], text: '() {' }),
                                      new あ({ tag: 'code', style: 'color: yellow', class: ['raw'], text: 'if' }),
                                      new あ({ tag: 'code', style: 'color: #8b3dd9', class: ['raw'], text: '(' }),
                                      new あ({ tag: 'code', style: 'color: pink', class: ['raw'], text: 'confirm' }),
                                      new あ({ tag: 'code', style: 'color: lightblue', class: ['raw'], text: '(' }),
                                      new あ({ tag: 'code', style: 'color: green', class: ['raw'], text: `"Would you like a random name?"` }),
                                      new あ({ tag: 'code', style: 'color: lightblue', class: ['raw'], text: ')' }),
                                      new あ({ tag: 'code', style: 'color: #8b3dd9', class: ['raw'], text: ')' }),
                                      new あ({ tag: 'code', style: 'color: pink', class: ['raw'], text: '{' }),
      
                                      new あ({ tag: 'code', style: 'color: cyan', class: ['raw'], text: 'let ' }),
                                      new あ({ tag: 'code', style: 'color: magenta', class: ['raw'], text: 'str' }),
                                      new あ({ tag: 'code', style: 'color: grey', class: ['raw'], text: '=' }),
                                      new あ({ tag: 'code', style: 'color: green', class: ['raw'], text: `""` }),
                                      new あ({ tag: 'code', style: 'color: grey', class: ['raw'], text: `;` }),
                                      new あ({ tag: 'code', style: 'color: yellow', class: ['raw'], text: 'for' }),
                                      new あ({ tag: 'code', style: 'color: lightblue', class: ['raw'], text: '(' }),
                                      new あ({ tag: 'code', style: 'color: cyan', class: ['raw'], text: 'let ' }),
                                      new あ({ tag: 'code', style: 'color: magenta', class: ['raw'], text: 'i' }),
                                      new あ({ tag: 'code', style: 'color: grey', class: ['raw'], text: '=' }),
                                      new あ({ tag: 'code', style: 'color: pink', class: ['raw'], text: '5' }),
                                      new あ({ tag: 'code', style: 'color: grey', class: ['raw'], text: `;` }),
                                      new あ({ tag: 'code', style: 'color: magenta', class: ['raw'], text: 'i' }),
                                      new あ({ tag: 'code', style: 'color: pink', class: ['raw'], text: '--;' }),
                                      new あ({ tag: 'code', style: 'color: lightblue', class: ['raw'], text: ')' }),
                                      new あ({ tag: 'code', style: 'color: magenta', class: ['raw'], text: 'str' }),
                                      new あ({ tag: 'code', style: 'color: grey', class: ['raw'], text: '+=' }),
                                      new あ({ tag: 'code', style: 'color: magenta', class: ['raw'], text: 'String' }),
                                      new あ({ tag: 'code', style: 'color: grey', class: ['raw'], text: '.' }),
                                      new あ({ tag: 'code', style: 'color: pink', class: ['raw'], text: 'fromCharCode' }),
                                      new あ({ tag: 'code', style: 'color: lightblue', class: ['raw'], text: '(' }),
                                      new あ({ tag: 'code', style: 'color: magenta', class: ['raw'], text: 'Math' }),
                                      new あ({ tag: 'code', style: 'color: grey', class: ['raw'], text: '.' }),
                                      new あ({ tag: 'code', style: 'color: pink', class: ['raw'], text: 'floor' }),
      
                                      new あ({ tag: 'code', style: 'color: yellow', class: ['raw'], text: '(' }),
                                      new あ({ tag: 'code', style: 'color: magenta', class: ['raw'], text: 'Math' }),
                                      new あ({ tag: 'code', style: 'color: grey', class: ['raw'], text: '.' }),
                                      new あ({ tag: 'code', style: 'color: pink', class: ['raw'], text: 'random' }),
                                      new あ({ tag: 'code', style: 'color: #8b3dd9', class: ['raw'], text: '()' }),
                                      new あ({ tag: 'code', style: 'color: pink', class: ['raw'], text: '* 0xFFFF' }),
      
                                      new あ({ tag: 'code', style: 'color: yellow', class: ['raw'], text: ')' }),
      
      
                                      new あ({ tag: 'code', style: 'color: lightblue', class: ['raw'], text: ')' }),
                                      new あ({ tag: 'code', style: 'color: grey', class: ['raw'], text: `;` }),
      
                                      new あ({ tag: 'code', style: 'color: pink', class: ['raw'], text: 'alert' }),
                                      new あ({ tag: 'code', style: 'color: lightblue', class: ['raw'], text: '(' }),
                                      new あ({ tag: 'code', style: 'color: pink', class: ['raw'], text: "`Your new name is " }),
                                      new あ({ tag: 'code', style: 'color: grey', class: ['raw'], text: '${' }),
                                      new あ({ tag: 'code', style: 'color: magenta', class: ['raw'], text: 'str' }),
      
                                      new あ({ tag: 'code', style: 'color: grey', class: ['raw'], text: '}' }),
                                      new あ({ tag: 'code', style: 'color: pink', class: ['raw'], text: "!`" }),
      
                                      new あ({ tag: 'code', style: 'color: lightblue', class: ['raw'], text: ')' }),
      
                                      new あ({ tag: 'code', style: 'color: pink', class: ['raw'], text: '}' }),
      
                                      new あ({ tag: 'code', style: 'color: orange', class: ['raw'], text: '}' }),
      
      
      
                                  ]
                              }),*/
                    ]
                }),
            ]
        }),
        /*  new あ({
              tag: 'div', class: ['holder'], style: 'background-color:darkgrey', children: [
                  new あ({
                      tag: 'div', children: [
                          new あ({ tag: 'p', style: 'color: black', text: 'Symbol: <b>Whatever this is</b>' }),
                          new あ({ tag: 'a', href: 'https://graphemica.com/%D9%BC/glyphs/times-new-roman-regular', style: 'color: white; font-size: 40px', text: 'ټ' }),
                      ]
                  }),
              ]
          }),*/
        new あ({
            tag: 'div', class: ['holder'], style: 'background-color:#34baeb', children: [
                new あ({
                    tag: 'div', children: [
                        new あ({ tag: 'p', style: 'color: black', text: 'Sound: <b>Windows Logon Sound</b>' }),
                        new あ({ tag: 'audio', src: './media/logonsound.mp3', controls: true, type: 'audio/mpeg' }),
                    ]
                }),
            ]
        }),
        new あ({
            tag: 'div', class: ['holder'], style: 'background-color:	#7289da', children: [
                new あ({
                    tag: 'div', children: [
                        new あ({ tag: 'p', style: 'color: black', text: 'Discord Emoji: <b>:bighugs:</b>', }),
                        new あ({
                            tag: 'img', src: './media/hugs.webp', title: 'big hugs', class: ['clickable'], events: {
                                click() {
                                    this.content.anim({ class: 'wobble-hor-bottom' })
                                }
                            }
                        }),
                    ]
                }),
            ]
        }),
        new あ({
            tag: 'div', class: ['holder'], style: 'background-color:	#314A63', children: [
                new あ({
                    tag: 'div', children: [
                        new あ({ tag: 'p', style: 'color: black', text: 'Pokemon: <b>Misdreavus</b>' }),
                        new あ({ tag: 'img', src: './media/200.webp', title: 'Misdreavus', width: 100, height: 100 }),
                        new あ({ tag: 'img', src: './media/m.webp', title: 'Misdreavus Gen 3', width: 100, height: 100 }),

                    ]
                }),
            ]
        }),
        new あ({
            tag: 'div', class: ['holder'], style: 'background-color:#08e6ff', children: [
                new あ({
                    tag: 'div', children: [
                        new あ({ tag: 'p', style: 'color: black', text: 'Season: <b>Winter</b>' }),
                        new あ({ tag: 'img', style: 'width:100%; height:100%;', src: './media/winter.webp', title: 'Winter', }),

                    ]
                }),
            ]
        }),
        /*       new あ({
                   tag: 'div', class: ['holder'], style: 'background-color:	#5f3685', children: [
                       new あ({
                           tag: 'div', children: [
                               new あ({ tag: 'p', style: 'color: black', text: 'App: <b>Discord</b>' }),
                               new あ({ tag: 'img', class:['clickable'], src: 'https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6257d23c5fb25be7e0b6e220_Open%20Source%20Projects%20_%20Discord-7.svg', title: 'Discord', width: 100, height: 100, events: [
                                   ['click',()=>{
                                       open('http://discord.com/users/805868620205916161')
                                   }]
                               ] }),

                           ]
                       }),
                   ]
               }),*/
        //
        new あ({
            tag: 'div', class: ['holder'], style: 'background-color:#cc8a33', children: [
                new あ({
                    tag: 'div', style: 'width:70%;', children: [
                        new あ({ tag: 'p', style: 'color: black', text: 'Messages:' }),
                        new あ({ tag: 'p', style: 'color: black', id: 'help1', text: '(tap image to go to the next one)' }),

                        new あ({
                            tag: 'div', children: [
                                new あ({
                                    tag: 'fig', children: [

                                        new あ({ tag: 'img', id: 'msgImg', class: ['clickable', 'preview'], title: 'Mila being hyper', src: './media/fig1.webp', events: { click() { cycleImage() } } }),
                                        new あ({ tag: 'figcaption', id: 'caption', class: ['cursive'], text: 'Exhibit A' }),
                                    ]
                                }),
                                new あ({ tag: 'p', style: 'color: black', id: 'desc', text: 'I LOVE WHEN YOU ARE HYPER AND SILLY AND USE CAPS IT <b>ALWAYS</b> CHEERS ME UP!!!' }),

                            ]
                        })
                    ]
                }),

            ]
        }),
        new あ({
            tag: 'div', class: ['holder'], style: 'background-color:#33cc42', children: [
                new あ({
                    tag: 'div', children: [
                        new あ({ tag: 'p', style: 'color: black', text: 'Tv series: <b>Gravity Falls</b>' }),
                        new あ({
                            tag: 'img', class: ['preview', 'clickable'], title: 'Gravity Falls (2012)', src: Elem.img('./media/gravityfalls.webp'), events: {
                                click() {
                                    open('https://www.youtube.com/watch?v=o2E2wLm_LlY&list=PLg6R6yXKSLYBomPPcqXGzaQI0pCZc8uZA')
                                }
                            }
                        })
                        //    new あ.youtube({ src: 'https://www.youtube.com/embed/o2E2wLm_LlY' }),
                    ]
                }),
            ]
        }),
        new あ({
            tag: 'div', class: ['holder'], style: 'background-color:#a32e2e', children: [
                new あ({
                    tag: 'div', children: [
                        new あ({ tag: 'p', style: 'color: black', text: 'Number:' }),
                        new あ({
                            tag: 'h1', class: ['clickable'], text: '49', id: '49', events: [
                                ['click', () => {
                                    あ['#49'].anim({ class: 'jello-horizontal' })
                                    for (let i = 10; i--;) {
                                        let x = new a({ x: canvas.content.width + 100, y: ran.range(0, canvas.content.height), shape: '49', size: 20 + ran.range(1, 10) })
                                        x.velocity = { x: ran.frange(1, 5), y: 0, a: ran.range(-0.1, 0.1), s: 0, o: 0 }

                                    }

                                }]
                            ]
                        }),

                    ]
                }),
            ]
        }),
        new あ({
            tag: 'div', class: ['holder'], style: 'background-color:#599c16', children: [
                new あ({
                    tag: 'div', children: [
                        new あ({ tag: 'p', style: 'color: black', text: 'Websites:' }),
                        new あ({
                            tag: 'div', style: 'display:grid;', children: [new あ({ tag: 'a', text: 'MDN Web Docs', href: 'https://developer.mozilla.org/en-US/' }),
                            new あ({ tag: 'a', text: 'W3Schools', href: 'https://www.w3schools.com/' }),
                            new あ({ tag: 'a', text: 'Animista', href: 'https://animista.net/' }),
                            new あ({ tag: 'a', text: 'Skribbl.io', href: 'https://skribbl.io/' })
                            ]
                        })
                    ]
                }),
            ]
        }),
        new あ({
            tag: 'div', class: ['holder'], style: 'background-color:	#f263d8', children: [
                new あ({
                    tag: 'div', children: [
                        new あ({ tag: 'p', style: 'color: black', text: 'Game: ' }),
                        new あ({
                            tag: 'img', class: ['preview', 'clickable'], src: './media/kirby.webp', title: 'Kirby\'s Return to Dreamland (2011)', events: {
                                click() {
                                    this.content.anim({ class: 'wobble-hor-bottom' })
                                }
                            }
                        }),

                    ]
                }),
            ]
        }), new あ({
            tag: 'div', class: ['holder'], style: 'background-color:#781e1e', children: [
                new あ({
                    tag: 'div', style: 'width:70%;', children: [
                        new あ({ tag: 'p', style: 'color: black', text: 'Avatars (not my art):' }),
                        new あ({ tag: 'p', style: 'color: black', id: 'help2', text: '(tap image to go to the next one)' }),

                        new あ({
                            tag: 'div', children: [

                                new あ({
                                    tag: 'img', id: 'avatars', class: ['clickable', 'preview'], src: './media/towa.webp', events: {
                                        click() {
                                            cycleAvatar()
                                        }
                                    }
                                }),

                            ]
                        })
                    ]
                }),

            ]
        }),
        new あ({
            tag: 'div', class: ['holder'], id: 'formtab', style: 'background-color:#3bc736', children: [
                new あ({ tag: 'p', text: 'Send me a message if you want :3' }),
                new あ({
                    tag: 'div', id: 'mainform', children: [
                        new あ({
                            tag: 'label', text: 'Name (optional)', for:'formName'
                        }),
                        new あ({ tag: 'input', class:['cute-input'],id: 'formName', name: 'name',placeholder:'namey name', value: 'anonymous' }),
                     
                        new あ({ tag: 'input', class:['cute-input'],id: 'formMessage', name: 'message', placeholder: 'Your message here...', events:{click(){
                            this.content.placeholder=`Your message here...`
                        }} }),
                        
                    ]
                }),
                new あ({
                    tag: 'button', id: 'submitBtn',class:['cute-button'], events: {
                        click() {
                            if (!あ['#formMessage'].content.value) {
                                あ['#formMessage'].placeholder='PUT A MESSAGE SILLY'
                                あ['#formMessage'].anim({class:'shake-horizontal'})
                                return
                            }
                            あ['#submitBtn'].noevent('click')
                            あ['#submitBtn'].kill()
                            あ['#loading'].show()
                            あ['#formMessage'].disabled = あ['#formName'].disabled = true
                            
                                ; (async () => {
                                 let x = await fetch(`https://formspree.io/f/mgvwbzvd`, {
                                        method: 'POST',
                                        body: `name=${あ['#formName'].content.value||'anonymous'}&message=${あ['#formMessage'].content.value}`,
                                        headers: {
                                            'Content-Type': 'application/x-www-form-urlencoded',
                                            'Accept': 'application/json'
                                        }
                                    })
                                 
                                    if (x.ok) {
                                        あ['#formtab'].anim({ class: 'slide-out-right' }, function () {
                                            this.content.kill()
                                        })
                                    }
                                    else {
                                        confirm(`For whatever reason i couldnt send your message :(! reload and try again`) && location.reload()
                                    }
                                })()
                        }
                    }, 
                    text: 'Send'
                }),

                new あ({tag:'img', class:['emoji2','hidden'],id:'loading',src:'./media/heartmessage.webp'}),
           /*     new あ({tag:'div',class:['hidden'],id:'loading',children:[
                    new あ({tag:'img', class:['emoji'],src:'./media/yb.webp'}),
                    new あ({tag:'img', class:['emoji'],src:'./media/tb.webp'})


                ]})*/
            ]
        }),
    ]
}, true)

function thanks() {
    あ['#main'].kill()
 let n =  new あ({tag:'div', start(){this.hide},children: [
        new あ({tag:'p',text:'THANK YOU FOR VIEWING THIS IT MEANS A LOT TO ME HONESTLY!!<br>I MADE IT MYSELF'}),
        new あ({tag:'img', src: Elem.img('./media/grouphug.webp')}),
        new あ({tag:'p',text:'Message me a screenshot if you see this'}),
    
    ],id:'main2'},true)
    n.anim({class:'roll-in-left'})
    
}


let examples = [{
    src: Elem.img('./media/fig1.webp'),
    description: 'I LOVE WHEN YOU ARE HYPER AND SILLY AND USE CAPS IT <b>ALWAYS</b> CHEERS ME UP!!!',
    title: 'Mila being hyper'
}, {
    src: Elem.img('./media/cicada.webp'),
    description: 'When you say stupid stuff that makes me laugh for no reason',
    title: 'CICADA'
}, {
    src: Elem.img('./media/copy.webp'),
    description: 'When you copy me',
    title: 'STARRRRRRRRRR'
}, {
    src: Elem.img('./media/bear.webp'),
    description: 'When you show me stuff you made!! Even if you think its bad! (i dont have an example for this one, so just take the hearts <3)',
    title: '<3'
},]
const letters = 'abcdefghijklmnopqrstuvwxyz'
let current = 0,
    current2 = 0;
let avatars = [
    Elem.img('./media/towa.webp'), Elem.img('./media/marnie.webp'), Elem.img('./media/kiss.webp'),
Elem.img('./media/mismagius.webp'),
Elem.img('./media/poke.webp'),
Elem.img('./media/coffee.webp'),
Elem.img('./media/rorochan.webp'),
Elem.img('./media/magolor.webp'),
Elem.img('./media/mawile.webp'),
Elem.img('./media/swords.webp'),
Elem.img('./media/cute.webp'),
Elem.img('./media/thing.webp'),

]
function cycleAvatar() {
    あ['#help2']?.kill()

    current2++
    if (!(avatars[current2])) current2 = 0;
    let m = あ['#avatars']
    m.noevent('click')

    m.anim({ class: 'fade-in-tr' }, function () { this.content.addevent({ click: cycleAvatar }) })
    m.src = avatars[current2]
}
function cycleImage() {
    あ['#help1']?.kill()
    current++
    if (!examples[current]) {
        current = 0
    }
    あ['#msgImg'].noevent('click')
    あ['#msgImg'].anim({ class: 'fade-in-tr' }, function () { this.content.addevent({ click: cycleImage }) })


    あ['#msgImg'].src = examples[current].src
    あ['#msgImg'].title = examples[current].title ?? ''
    あ['#desc'].content.innerHTML = examples[current].description
    あ['#caption'].content.innerHTML = `Exhibit ${letters[current].toUpperCase()}`
}
canvas.addParticles = () => {
    canvas.all.forEach(o => {
        if (o.shape == 'bg') {
            o.kill()
        }
    })
    for (let i = 4; i--;) {
        let m = new a({ shape: 'bg', size: ran.range(10, 20), color: ran.choose('#FF0000', '#00FF00', '#0000FF'), x: ran.range(0, canvas.width), y: ran.range(0, canvas.height) })
        m.opacity = 0.2
        m.layer = 1

    }
}
