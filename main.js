'use strict';
Elem['#progress'].kill()
let あ = Elem, r = color
あ.logLevels.error = true


const { sin, cos } = Math;


new あ({
    parent: body,
    start() {
        this.anim({ class: 'bounce-in-top' },
            () => {
                new あ({
                    tag: 'img', src: Elem.img('./media/hearticon.webp'), class: ['emoji', 'clickable'], start() {
                        this.fadeIn(() => this.addevent({
                            click() {
                                this.content.noevent('click')
                                this.content.removeClass('clickable')
                                this.content.fadeOut()
                                あ['#main'].fadeOut(thanks)
                            }
                        }))
                    }, id: 'foot', events: {

                    }
                }, true)
                let div = new SceneryElem({

                    parent: box, styles: {
                        'z-index': 3, width: '200px', height: '200px',
                        position: 'absolute', top: '100%', display: 'flex',
                        'align-items': 'center'

                    }, x: 300, y: -200
                })
                div.fadeIn()
                div.velocity = { y: -1 }
                for (let i of ['wings', 'wings2']) {
                    let x = i !== 'wings' ? '180deg' : '0deg'
                    let f = new Elem({
                        draggable: false,
                        tag: 'img',
                        src: Elem.img('./media/wings.webp'),
                        parent: div, styles: {
                            width: '50%', height: '50%',
                            transform: `rotateY(${x})`
                        }
                    })
                    i === 'wings' && new Elem({
                        tag: 'img', parent: div,
                        src: Elem.img(`./media/art.webp`),
                        draggable: false,

                        styles: {
                            'box-shadow': '0 0 30px yellow',
                            width: '100px',
                            'border-radius': '100%',
                            height: '100px',
                            'min-width': '100px',
                            'min-height': '100px',
                            'max-width': '100px',
                            'max-height': '100px',
                            'margin-top': '40px'
                        }
                    })
                }

                for (let i = 10; i--;) {
                    let _c = color.choose()
                    let em = new SceneryElem({
                        parent: あ['#box'],
                        x: innerWidth * Math.random(), y: innerHeight + 150,
                        styles: {
                            'max-width': '100%',

                            opacity: 0.7,
                            'background-color': _c,
                            'z-index': '-1',
                            'border-radius': '100%',
                            border: 'solid ' + color.dhk(_c)
                        }, class: ['introCircles'],
                    })
                    em.velocity = { y: -1 * ran.range(2, 10) }
                }

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

                                    })
                                }
                            }, style: 'border-radius: 10%;'
                        })
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
                            tag: 'p', class: ['clickable'], text: '49', id: '49', events: [
                                ['click', () => {
                                    あ['#49'].anim({ class: 'jello-horizontal' })


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
                new あ({ tag: 'p', id: 'jeff', text: 'Send me a message if you want :3' }),
                new あ({
                    tag: 'div', id: 'mainform', children: [
                        new あ({
                            tag: 'label', text: 'Name (optional)<br>', for: 'formName'
                        }),
                        new あ({ tag: 'input', class: ['cute-input'], id: 'formName', name: 'name', placeholder: 'namey name', value: 'anonymous' }),

                        new あ({
                            tag: 'input', class: ['cute-input'], id: 'formMessage', name: 'message', placeholder: 'Your message here...', events: {
                                click() {
                                    this.content.placeholder = `Your message here...`
                                }
                            }
                        }),

                    ]
                }),
                new あ({
                    tag: 'button', id: 'submitBtn', class: ['cute-button'], events: {
                        click() {
                            if (!あ['#formMessage'].content.value) {
                                あ['#formMessage'].placeholder = 'PUT A MESSAGE SILLY'
                                あ['#formMessage'].anim({ class: 'shake-horizontal' })
                                return
                            }
                            あ['#submitBtn'].noevent('click')
                            あ['#submitBtn'].kill()
                            あ['#loading'].show()
                            あ['#formMessage'].disabled = あ['#formName'].disabled = true

                                ; (async () => {
                                    try {
                                        let x = await fetch(`https://formspree.io/f/mgvwbzvd`, {
                                            method: 'POST',
                                            body: `name=${あ['#formName'].content.value || 'anonymous'}&message=${あ['#formMessage'].content.value}`,
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
                                            confirm(`Something went wrong... reload and try again?`) && location.reload()
                                        }
                                    } catch (e) {
                                        //  confirm(`For whatever reason i couldnt send your message :(! reload and try again`) && location.reload()

                                        あ['#mainform'].kill()
                                        あ['#loading'].kill()
                                        あ['#jeff'].innerHTML = 'Your message could not be sent because: '
                                        new Elem({
                                            tag: 'p',
                                            class: ['shake-horizontal'],
                                            styles: { 'font-size': '25px', color: 'black' },
                                            text: e.message, parent: あ['#formtab']
                                        })
                                        throw e
                                    }

                                })()
                        }
                    },
                    text: 'Send'
                }),

                new あ({ tag: 'img', class: ['emoji2', 'hidden'], id: 'loading', src: './media/heartmessage.webp' }),
                /*     new あ({tag:'div',class:['hidden'],id:'loading',children:[
                         new あ({tag:'img', class:['emoji'],src:'./media/yb.webp'}),
                         new あ({tag:'img', class:['emoji'],src:'./media/tb.webp'})
     
     
                     ]})*/
            ]
        }),
    ]
})

function thanks() {
    あ['#main'].kill()
    let n = new あ({
        tag: 'div', start() { this.hide }, children: [
            new あ({ tag: 'p', text: 'THANK YOU FOR VIEWING THIS IT MEANS A LOT TO ME HONESTLY!!<br>I MADE IT MYSELF' }),
            new あ({ tag: 'img', src: Elem.img('./media/grouphug.webp') }),
            new あ({ tag: 'p', text: 'Message me a screenshot if you see this' }),

        ], id: 'main2'
    }, true)
    n.anim({ class: 'roll-in-left' })

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

let bo = new あ({ tag: 'div', id: 'box' }, true)


const loop = function () {
    requestAnimationFrame(loop)
    for (let e of SceneryElem.all) {
        if (Elem.elements.has(e)) e.update()
        else SceneryElem.all.delete(e)
    }
}
loop()
