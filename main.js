import ascii from './ascii.js'
__('progress')
let あ = Elem, r = color,snow;
const { sin, cos } = Math;
$({
    parent: body,
    start() {
        this.anim({ class: 'bounce-in-top', 'keep class': true },
            () => {
                $({
                    parent:body,
                    tag: 'img', src: Elem.preload('./media/hearticon.webp'), class: ['emoji', 'clickable'], styles: { opacity: 0 }, start() {
                        this.fadeIn(() => this.addevent({
                            async click() {
                                this.noevent('click')
                                this.removeClass('clickable')
                                this.fadeOut(this.kill)
                              await  Elem.$('main').fadeOut()
                               thanks()
                            }
                        }))
                    }, id: 'foot',
                })


                Elem.bulk((first, second) => {
                    let div = new SceneryElem({

                        parent: 'box', styles: {
                            'z-index': 3, width: '200px', height: '200px',
                            position: 'absolute', display: 'flex',
                            'align-items': 'center'

                        }, x: 100, y: innerHeight
                    })
                    div.fadeIn()
                    div.velocity.set(0, -1)
                    for (let i of ['wings', 'wings2']) {
                        let x = i !== 'wings' ? '180deg' : '0deg'
                        let f = new Elem({
                            draggable: false,
                            tag: 'img',
                            src: first,
                            parent: div, styles: {
                                width: '50%', height: '50%',
                                transform: `rotateY(${x})`
                            }
                        })
                        i === 'wings' && new Elem({
                            tag: 'img', parent: div,
                            src: second,
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

                }, './media/wings.webp', './media/art.webp')

                for (let i = 10; i--;) {
                    let _c = color.choose()
                    let em = new SceneryElem({
                        parent: あ.$('box'),
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
                    em.velocity.set(0, -1 * ran.range(2, 10))
                }

            })
    },
    tag: 'div', id: 'main', children: [
        $({ tag: 'p', class: ['fancy'], text: '<img class="emoji"  src="./media/stars.webp"> Favourite Things <img class="emoji" src="./media/stars.webp">' }),
        $({
            tag: 'div', class: ['holder'], id: 'color', style: 'background-color:#20a6a6', children: [
                $({
                    tag: 'div', children: [
                        $({ tag: 'p', text: 'Color: <b>Teal</b>' }),
                        $({
                            tag: 'input', type: 'color', class: ['clickable'], events: [
                                ['change', function () {
                                    あ.$('#color').style.backgroundColor = this.value
                                }]
                            ], value: '#20a6a6'
                        })
                    ]
                }),
            ]
        }),

        $({
            tag: 'div', class: ['holder'], style: 'background-color:yellow', children: [
                $({
                    tag: 'div', children: [
                        $({ tag: 'p', style: 'color: black', text: 'Fruit:' }),
                        $({
                            tag: 'h2', style: 'color: black', class: ['clickable'], text: '🍋Lemon🍋', events: [
                                ['click', () => {

                                }]
                            ]
                        }),
                    ]
                }),
            ]
        }),

        $({
            tag: 'div', class: ['holder'], style: 'background-color:green', children: [
                $({
                    tag: 'div', children: [
                        $({ tag: 'p', text: 'Hobby: <b>Code (JavaScript)</b>' }),
                        $({
                            tag: 'img', class: ['clickable', 'preview'], src: Elem.preload('./media/js.webp'), events: {
                                click() {
                                    this.anim({ class: 'rotate-center', }, () => {

                                    },)
                                }
                            }, style: 'border-radius: 10%;'
                        })
                    ]
                }),
            ]
        }),
        /*  $({
              tag: 'div', class: ['holder'], style: 'background-color:darkgrey', children: [
                  $({
                      tag: 'div', children: [
                          $({ tag: 'p', style: 'color: black', text: 'Symbol: <b>Whatever this is</b>' }),
                          $({ tag: 'a', href: 'https://graphemica.com/%D9%BC/glyphs/times-new-roman-regular', style: 'color: white; font-size: 40px', text: 'ټ' }),
                      ]
                  }),
              ]
          }),*/
        $({
            tag: 'div', class: ['holder'], style: 'background-color:#34baeb', children: [
                $({
                    tag: 'div', children: [
                        $({ tag: 'p', style: 'color: black', text: 'Sound: <b>Windows Logon Sound</b>' }),
                        $({ tag: 'audio', src: Elem.preload('./media/logonsound.mp3'), controls: true, type: 'audio/mpeg' }),
                    ]
                }),
            ]
        }),
        $({
            tag: 'div', class: ['holder'], style: 'background-color:	#7289da', children: [
                $({
                    tag: 'div', children: [
                        $({ tag: 'p', style: 'color: black', text: 'Discord Emoji: <b>:bighugs:</b>', }),
                        $({
                            tag: 'img', src: Elem.preload('./media/hugs.webp'), title: 'big hugs', class: ['clickable'], events: {
                                click() {
                                    this.anim({ class: 'wobble-hor-bottom' })
                                }
                            }
                        }),
                    ]
                }),
            ]
        }),
        $({
            tag: 'div', class: ['holder'], style: 'background-color:	#314A63', children: [
                $({
                    tag: 'div', children: [
                        $({ tag: 'p', style: 'color: black', text: 'Pokemon: <b>Misdreavus</b>' }),
                        $({ tag: 'img', src: './media/200.webp', title: 'Misdreavus', width: 100, height: 100 }),
                        $({ tag: 'img', src: './media/m.webp', title: 'Misdreavus Gen 3', width: 100, height: 100 }),

                    ]
                }),
            ]
        }),
        $({
            tag: 'div', class: ['holder'], style: 'background-color:#08e6ff', children: [
                $({
                    tag: 'div', children: [
                        $({ tag: 'p', style: 'color: black', text: 'Season: <b>Winter</b>' }),
                       snow= $({
                             tag: 'div', styles: {
                                width: 'inherit',
                                height: '250px',
                                overflow: 'hidden',
                                position: 'relative'
                            }
                        })
                        //$({ tag: 'img', style: 'width:100%; height:100%;', src: './media/winter.webp', title: 'Winter', }),

                    ]
                }),
            ]
        }),
        /*       $({
                   tag: 'div', class: ['holder'], style: 'background-color:	#5f3685', children: [
                       $({
                           tag: 'div', children: [
                               $({ tag: 'p', style: 'color: black', text: 'App: <b>Discord</b>' }),
                               $({ tag: 'img', class:['clickable'], src: 'https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6257d23c5fb25be7e0b6e220_Open%20Source%20Projects%20_%20Discord-7.svg', title: 'Discord', width: 100, height: 100, events: [
                                   ['click',()=>{
                                       open('http://discord.com/users/805868620205916161')
                                   }]
                               ] }),

                           ]
                       }),
                   ]
               }),*/
        //
        $({
            tag: 'div', class: ['holder'], style: 'background-color:#cc8a33', children: [
                $({
                    tag: 'div', style: 'width:70%;', children: [
                        $({ tag: 'p', style: 'color: black', text: 'Messages:' }),
                        $({ tag: 'p', style: 'color: black', id: 'help1', text: '(tap image to go to the next one)' }),

                        $({
                            tag: 'div', children: [
                                $({
                                    tag: 'fig', children: [

                                        $({
                                            tag: 'img', id: 'msgImg', class: ['clickable', 'preview'], title: 'Mila being hyper', src: './media/fig1.webp', events: {
                                                click() {
                                                    this.disableEvent('click')
                                                    this.anim({ class: 'fade-in-tr' }, () => this.enableEvent('click'))
                                                    cycleImage()


                                                }
                                            }
                                        }),
                                        $({ tag: 'figcaption', id: 'caption', class: ['cursive'], text: 'Exhibit A' }),
                                    ]
                                }),
                                $({ tag: 'p', style: 'color: black', id: 'desc', text: 'I LOVE WHEN YOU ARE HYPER AND SILLY AND USE CAPS IT <b>ALWAYS</b> CHEERS ME UP!!!' }),

                            ]
                        })
                    ]
                }),

            ]
        }),
        $({
            tag: 'div', class: ['holder'], style: 'background-color:#33cc42', children: [
                $({
                    tag: 'div', children: [
                        $({ tag: 'p', style: 'color: black', text: 'Tv series: <b>Gravity Falls</b>' }),
                        $({
                            tag: 'img', class: ['preview', 'clickable'], title: 'Gravity Falls (2012)', src: Elem.preload('./media/gravityfalls.webp'), events: {
                                click() {
                                    open('https://www.youtube.com/watch?v=o2E2wLm_LlY&list=PLg6R6yXKSLYBomPPcqXGzaQI0pCZc8uZA')
                                }
                            }
                        })
                        //    $.youtube({ src: 'https://www.youtube.com/embed/o2E2wLm_LlY' }),
                    ]
                }),
            ]
        }),
        $({
            tag: 'div', class: ['holder'], style: 'background-color:#a32e2e', children: [
                $({
                    tag: 'div', children: [
                        $({ tag: 'p', style: 'color: black', text: 'Number:' }),
                        $({
                            tag: 'p', class: ['clickable'], text: '49', id: 'forty', events: [
                                ['click', function () {
                                    this.anim({ class: 'jello-horizontal' })


                                }]
                            ]
                        }),

                    ]
                }),
            ]
        }),
        $({
            tag: 'div', class: ['holder'], style: 'background-color:#599c16', children: [
                $({
                    tag: 'div', children: [
                        $({ tag: 'p', style: 'color: black', text: 'Websites:' }),
                        $({
                            tag: 'div', style: 'display:grid;', children: [$({ tag: 'a', text: 'MDN Web Docs', href: 'https://developer.mozilla.org/en-US/' }),
                            $({ tag: 'a', text: 'W3Schools', href: 'https://www.w3schools.com/' }),
                            $({ tag: 'a', text: 'Animista', href: 'https://animista.net/' }),
                            $({ tag: 'a', text: 'Skribbl.io', href: 'https://skribbl.io/' })
                            ]
                        })
                    ]
                }),
            ]
        }),
        $({
            tag: 'div', class: ['holder'], style: 'background-color:	#f263d8', children: [
                $({
                    tag: 'div', children: [
                        $({ tag: 'p', style: 'color: black', text: 'Game: ' }),
                        $({
                            tag: 'img', class: ['preview', 'clickable'], src: Elem.preload('./media/kirby.webp'), title: 'Kirby\'s Return to Dreamland (2011)', events: {
                                click() {
                                    this.anim({ class: 'wobble-hor-bottom' })
                                }
                            }
                        }),

                    ]
                }),
            ]
        }), $({
            tag: 'div', class: ['holder'], style: 'background-color:#781e1e', children: [
                $({
                    tag: 'div', style: 'width:70%;', children: [
                        $({ tag: 'p', style: 'color: black', text: 'Avatars (not my art):' }),
                        $({ tag: 'p', style: 'color: black', id: 'help2', text: '(tap image to go to the next one)' }),

                        $({
                            tag: 'div', children: [

                                $({
                                    tag: 'img', id: 'avatars', class: ['clickable', 'preview'], src: Elem.preload('./media/towa.webp'), events: {
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
        $({
            tag: 'div', class: ['holder'], style: 'background-color:#2b731e', children: [
                $({
                    tag: 'div', style: 'width:70%;', children: [
                        $({ tag: 'p', style: 'color: black', text: 'Font' }),
                      $({tag:'h1',styles:{'font-family':'Choco cooky',},text:'Choco Cooky'})
                    ]
                }),

            ]
        }),
        /* $({
             tag: 'div', class: ['holder'], id: 'formtab', style: 'background-color:#3bc736', children: [
                 $({ tag: 'p', id: 'jeff', text: 'Send me a message if you want :3' }),
                 $({
                     tag: 'div', id: 'mainform', children: [
                         $({
                             tag: 'label', text: 'Name (optional)<br>', for: 'formName'
                         }),
                         $({ tag: 'input', class: ['cute-input'], id: 'formName', name: 'name', placeholder: 'namey name', value: 'anonymous' }),
 
                         $({
                             tag: 'input', class: ['cute-input'], id: 'formMessage', name: 'message', placeholder: 'Your message here...', events: {
                                 click() {
                                     this.placeholder = `Your message here...`
                                 }
                             }
                         }),
 
                     ]
                 }),
                 $({
                     tag: 'button', id: 'submitBtn', class: ['cute-button'], events: {
                         click() {
                             if (!Elem.$('#formMessage'].value) {
                                 Elem.$('#formMessage'].placeholder = 'PUT A MESSAGE SILLY'
                                 Elem.$('#formMessage'].anim({class: 'shake-horizontal' })
                                 return
                             }
                             Elem.$('#submitBtn'].noevent('click')
                             Elem.$('#submitBtn'].kill()
                             Elem.$('#loading'].show()
                             Elem.$('#formMessage'].disabled = Elem.$('#formName'].disabled = true
                             let NAME = Elem.$('#formName'].value
                             let MESSAGE = Elem.$('#formMessage'].value
                                 ; (async () => {
                                     try {
                                         let x = await fetch(`https://formspree.io/f/mgvwbzvd`, {
                                             method: 'POST',
                                             body: `name=${encodeURIComponent(NAME) || 'anonymous'}&message=${encodeURIComponent(MESSAGE)}`,
                                             headers: {
                                                 'Content-Type': 'application/x-www-form-urlencoded',
                                                 'Accept': 'application/json'
                                             }
                                         })
                                         if (x.ok) {
                                             Elem.$('#formtab'].anim({ class: 'slide-out-right' }, function () {
                                                 this.kill()
                                             })
                                         }
                                         else {
                                             confirm(`Something went wrong... reload and try again?`) && location.reload()
                                         }
                                     } catch (e) {
                                         //  confirm(`For whatever reason i couldnt send your message :(! reload and try again`) && location.reload()
 
                                         Elem.$('#mainform'].kill()
                                         Elem.$('#loading'].kill()
                                         Elem.$('#jeff'].innerHTML = 'Your message could not be sent because: '
                                         new Elem({
                                             tag: 'p',
                                             class: ['shake-horizontal'],
                                             styles: { 'font-size': '25px', color: 'black' },
                                             text: e.message, parent: Elem.$('#formtab']
                                         })
                                         throw e
                                     }
 
                                 })()
                         }
                     },
                     text: 'Send'
                 }),
 
                 $({ tag: 'img', class: ['emoji2', 'hidden'], id: 'loading', src: './media/heartmessage.webp' }),
           
             ]
         }),*/
    ]
})

function thanks() {
    let n = $({
        tag: 'div', children: [
            $({ tag: 'p', text: 'THANK YOU FOR VIEWING THIS IT MEANS A LOT TO ME HONESTLY!!<br>I MADE IT MYSELF' }),
            $({ tag: 'img', src: Elem.preload('./media/grouphug.webp') }),
            $({ tag: 'p', text: 'Message me a screenshot if you see this' }),

        ], id: 'main2'
    }, true)
    n.show()
    n.reveal()
    n.anim({ class: 'roll-in-left' }, () => あ.$('main').kill())

}


let examples = [{
    src: Elem.preload('./media/fig1.webp'),
    description: 'I LOVE WHEN YOU ARE HYPER AND SILLY AND USE CAPS IT <b>ALWAYS</b> CHEERS ME UP!!!',
    title: 'Mila being hyper'
}, {
    src: Elem.preload('./media/cicada.webp'),
    description: 'When you say stupid stuff that makes me laugh for no reason',
    title: 'CICADA'
}, {
    src: Elem.preload('./media/copy.webp'),
    description: 'When you copy me',
    title: 'STARRRRRRRRRR'
}, {
    src: Elem.preload('./media/bear.webp'),
    description: 'When you show me stuff you made!! Even if you think its bad! (i dont have an example for this one, so just take the hearts <3)',
    title: '<3'
},]
const letters = 'abcdefghijklmnopqrstuvwxyz'
let current = 0,
    current2 = 0;
let avatars = [
    './media/towa.webp', Elem.preload('./media/marnie.webp'), Elem.preload('./media/kiss.webp'),
    Elem.preload('./media/mismagius.webp'),
    Elem.preload('./media/poke.webp'),
    Elem.preload('./media/coffee.webp'),
    Elem.preload('./media/rorochan.webp'),
    Elem.preload('./media/magolor.webp'),
    Elem.preload('./media/mawile.webp'),
    Elem.preload('./media/swords.webp'),
    Elem.preload('./media/cute.webp'),
    Elem.preload('./media/thing.webp'),

]
function cycleAvatar() {
    Elem.$('help2')?.kill()

    current2++
    if (!(avatars[current2])) current2 = 0;
    let m = Elem.$('avatars')
    m.noevent('click')

    m.anim({ class: 'fade-in-tr' }, function () { this.addevent({ click: cycleAvatar }) })
    m.src = avatars[current2]
}
function cycleImage() {
    Elem.$('help1')?.kill()
    current++
    if (!examples[current]) {
        current = 0
    }


    Elem.$('msgImg').src = examples[current].src
    Elem.$('msgImg').title = examples[current].title ?? ''
    Elem.$('desc').innerHTML = examples[current].description
    Elem.$('caption').innerHTML = `Exhibit ${letters[current].toUpperCase()}`
}

let bo = $({ parent:body,tag: 'div', id: 'box' },)
Elem.preload('./media/strawberry.gif')
let frame = 0;
const loop = function () {
    requestAnimationFrame(loop)
    frame++
    SceneryElem.update()
    if (!(frame % 400)) {
        let col = ran.choose(color.red, color.green,color.pink,color.white, color.yellow, color.orange)
        let te = new SceneryElem({
            parent: 'box', styles: {
                'text-align': 'center', /* 'max-width':'80px',*/              opacity: 0,
            }, children: [
                new Elem({
                    tag: 'pre', text: ran.choose(...ascii), styles: {
                        'font-family': 'Choco',
                        'text-rendering':'optimizespeed',
                        'font-size': '10px',
                    /*    'text-shadow': `0 0 4px ${col}, 
                0 0 20px ${col}, 
                0 0 30px ${col}, 
                0 0 40px ${col}, 
                0 0 50px ${col}`,*/
                        color: col
                    }
                })
            ]
        })
        te.fadeIn()
        te.children[0].styleMe({transform:`rotate(${ran.range(-10,10)}deg)`})
        let _ran = ran.choose(1, -1)
        te.position.set(_ran > 0 ? innerWidth - 100 : 0, Math.random() * innerHeight)
        te.velocity.set(_ran > 0 ? -1 : 1, 0)
    }
    if (!(frame % 600) && frame > 100) {
        let berry = new SceneryElem({
            parent: 'box',
            styles: { opacity: 0, cursor: 'pointer' },
            position: 'relative',
            events: {
                click() {
                    this.fadeOut(this.kill)
                }
            },
            children: [
                new Elem({
                    tag: 'img', src: './media/strawberry.gif',
                    start() {
                        this.transition({
                            timing: {
                                easing: 'linear',
                                duration: ran.range(1000, 3000),
                                iterations: Infinity
                            },
                            frames: {
                                transform: `rotate(${ran.choose(360, 360 * 2, 360 * 3) * ran.choose(1, -1)}deg)`
                            }
                        })
                    },
                    styles: {
                        width: '30px',
                        height: '30px',
                    }
                })
            ]
        })
        berry.fadeIn()
        berry.position.set(Math.random() * innerWidth, -30)
        berry.velocity.set(ran.range(-2, 2), 1)

    }
    if (!(frame % 20)) {
        let u = function () {
            if (this.rand > 0) {
                this.velocity.add(Math.cos((frame - this.offset) / 100) / 100, 0)
            }
            else {
                this.velocity.add(Math.sin((frame - this.offset) / 100) / 100, 0)

            }
        }
        if (!document.body.contains(snow.content)) {
            return
        }
        let f = new SceneryElem({
            x: ran.range(0, 300),
            y: -100,
            position: 'absolute',

            children: [
                new Elem({
                    draggable: false,
                    class: [ran.choose('spin', 'spin2'), 'snowflake'], tag: 'img', src: "./media/snow.svg", styles: { width: '30px', height: '30px' }
                })
            ], parent: snow,
        })
        f.offset = ran.range(0, 4000)
        for (let i = 2; i--;) {
            let k = new SceneryElem({
                x: ran.range(0, 300),
                y: -100,

                parent: snow,
                styles: {
                    width: '5px',
                    height: '5px',
                    'border-radius': '100%',
                    'background-color': 'white'
                }
            })
            k.velocity.set(0, 1)
            k.rand = ran.choose(-1, 1)
            k.update = u
            k.offset = ran.range(0, 4000)
        }
        f.update = u
        f.rand = ran.choose(-1, 1)
        f.velocity.set(0, 1)
        f.fadeIn()
        f.angular = 0.1
    }
}
loop()
