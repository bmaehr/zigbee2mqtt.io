"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[67009],{55720:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-56e97ff8",path:"/devices/MS-104Z.html",title:"Moes MS-104Z control via MQTT",lang:"en-US",frontmatter:{title:"Moes MS-104Z control via MQTT",description:"Integrate your Moes MS-104Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2020-12-30T11:31:00.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Power_on_behavior (enum)",slug:"power-on-behavior-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/MS-104Z.md",git:{updatedTime:1640814999e3}}},85822:(e,t,o)=>{o.r(t),o.d(t,{default:()=>d});const i=(0,o(66252).uE)('<h1 id="moes-ms-104z" tabindex="-1"><a class="header-anchor" href="#moes-ms-104z" aria-hidden="true">#</a> Moes MS-104Z</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>MS-104Z</td></tr><tr><td>Vendor</td><td>Moes</td></tr><tr><td>Description</td><td>Smart light switch module (1 gang)</td></tr><tr><td>Exposes</td><td>switch (state), power_on_behavior, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/MS-104Z.jpg" alt="Moes MS-104Z"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press switch to turn ON/OFF cycle for 5 times (keep time interval not too short) until the beep sounds continuously and rapidly for enter in pairing mode.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="power-on-behavior-enum" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum" aria-hidden="true">#</a> Power_on_behavior (enum)</h3><p>Controls the behaviour when the device is powered on. Value can be found in the published state on the <code>power_on_behavior</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>, <code>previous</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12),a={},d=(0,o(83744).Z)(a,[["render",function(e,t){return i}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);