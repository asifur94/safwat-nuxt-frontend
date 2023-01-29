import { b as buildAssetsURL } from '../../paths.mjs';
import axios from 'axios';
import { useSSRContext, resolveComponent, withCtx, createTextVNode, createVNode, toDisplayString, mergeProps } from 'vue';
import { ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'ufo';
import '../../defu.mjs';
import 'destr';
import 'scule';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';

const _sfc_main$2 = {
  mounted() {
    this.getProducts();
  },
  data: function() {
    return {
      productsUrl: "http://localhost:8888/tp/wp-json/wp/v2/product",
      products: [],
      productsData: {}
    };
  },
  methods: {
    getProducts() {
      axios.get(this.productsUrl, { params: this.productsData }).then((response) => {
        this.products = response.data;
      }).catch((error) => {
        console.log(error);
      });
    }
  },
  props: ["index"]
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5" }, _attrs))}><!--[-->`);
  ssrRenderList(_ctx.products, (product) => {
    _push(`<div class="w-52 bg-white shadow-md flex justify-end rounded-xl duration-500 hover:scale-105 hover:shadow-xl"><a href="#"><img${ssrRenderAttr("src", product.featured_media.source_url)} alt="Product" class="h-52 w-52 object-cover rounded-t-xl"><div class="px-4 py-3 w-52"><p class="text-lg font-bold text-black truncate block capitalize">${ssrInterpolate(product.title.rendered)}</p><span class="text-gray-400 mr-3 uppercase text-xs"><p>${ssrInterpolate(product.content.rendered)}</p></span><div class="flex items-center"><p class="text-lg font-semibold text-red-700 cursor-auto my-3">$149</p><del><p class="text-sm text-gray-600 cursor-auto ml-2">$199</p></del><div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"></path><path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"></path></svg></div></div></div></a></div>`);
  });
  _push(`<!--]--></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/productAll.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  data() {
    return {
      count: 1
    };
  },
  props: ["index"]
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_font = resolveComponent("font");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "flex justify-between items-center",
    style: { "width": "250px", "padding": "10px 25px", "border-radius": "5px", "color": "rgb(0,0,0)", "border": "1px solid #F2F2F2" }
  }, _attrs))}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clip-rule="evenodd"></path></svg><span id="quantity-text" style="${ssrRenderStyle({ "font-size": "18px" })}">`);
  _push(ssrRenderComponent(_component_font, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p${_scopeId2}>${ssrInterpolate($data.count)}</p>`);
            } else {
              return [
                createVNode("p", {
                  textContent: toDisplayString($data.count)
                }, null, 8, ["textContent"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, null, {
            default: withCtx(() => [
              createVNode("p", {
                textContent: toDisplayString($data.count)
              }, null, 8, ["textContent"])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd"></path></svg></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/counterBox.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "" + buildAssetsURL("hero.82ab5fd6.png");
const _imports_1 = "" + buildAssetsURL("Rectangle.1b389b24.png");
const _imports_2 = "" + buildAssetsURL("Logo.00193b2c.png");
const _imports_3 = "" + buildAssetsURL("olivia.8209cfe2.webp");
const _imports_4 = "" + buildAssetsURL("avatar.9c77b17e.jpeg");
const _sfc_main = {
  name: "ToggleDiv",
  data: function() {
    return {
      isShow: false
    };
  },
  props: {
    msg: String
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_font = resolveComponent("font");
  const _component_productAll = __nuxt_component_0;
  const _component_counterBox = __nuxt_component_1;
  _push(`<!--[--><section><div class="container-fluid pl-0 pr-0"><img class="w-full"${ssrRenderAttr("src", _imports_0)}></div></section><section class="text-end"><div class="container"><div class="flex flex-row-reverse items-end pt-0 mt-3"><div class="flex justify-end p-2"><span class="flex justify-end"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class="flex justify-end"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class="flex justify-end"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class="flex justify-end"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class="flex justify-end"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span></div><span class="flex text-center p-1 font-xs me-1">`);
  _push(ssrRenderComponent(_component_font, { class: "vertical-align: inherit;" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, { class: "vertical-align: inherit;" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`48,120`);
            } else {
              return [
                createTextVNode("48,120")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, { class: "vertical-align: inherit;" }, {
            default: withCtx(() => [
              createTextVNode("48,120")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span></div><h2 class="text-3xl red-700 mb-3">`);
  _push(ssrRenderComponent(_component_font, { class: "vertical-align: inherit;" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, { class: "vertical-align: inherit;" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Safwat Al Jouf olive oil`);
            } else {
              return [
                createTextVNode("Safwat Al Jouf olive oil")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, { class: "vertical-align: inherit;" }, {
            default: withCtx(() => [
              createTextVNode("Safwat Al Jouf olive oil")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><h3 class="text-base mb-4">`);
  _push(ssrRenderComponent(_component_font, { class: "vertical-align: inherit;" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, { class: "vertical-align: inherit;" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Excellent virgin first squeeze`);
            } else {
              return [
                createTextVNode("Excellent virgin first squeeze")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, { class: "vertical-align: inherit;" }, {
            default: withCtx(() => [
              createTextVNode("Excellent virgin first squeeze")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3><p>`);
  _push(ssrRenderComponent(_component_font, { class: "text-base vertical-align: inherit;" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, { class: "vertical-align: inherit;" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Safwat Al-Jouf olive oil, like pure gold, we picked from our best crops, our farms in Al-Jouf, where 100% organic extra-virgin olive oil is produced by first cold pressing.`);
            } else {
              return [
                createTextVNode("Safwat Al-Jouf olive oil, like pure gold, we picked from our best crops, our farms in Al-Jouf, where 100% organic extra-virgin olive oil is produced by first cold pressing.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, { class: "vertical-align: inherit;" }, {
            default: withCtx(() => [
              createTextVNode("Safwat Al-Jouf olive oil, like pure gold, we picked from our best crops, our farms in Al-Jouf, where 100% organic extra-virgin olive oil is produced by first cold pressing.")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><img${ssrRenderAttr("src", _imports_1)} class="w-full mt-5"></div></section><section class="mt-4 text-end"><div class="container"><h3 class="text-base font-bold mb-4">`);
  _push(ssrRenderComponent(_component_font, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Width`);
            } else {
              return [
                createTextVNode("Width")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, null, {
            default: withCtx(() => [
              createTextVNode("Width")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3><div class="swiper-container swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-rtl swiper-backface-hidden mb-14 truncate"><!--[-->`);
  ssrRenderList(_ctx.products, (product) => {
    _push(ssrRenderComponent(_component_productAll, { key: product }, null, _parent));
  });
  _push(`<!--]--><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div><div class="d-flex justify-content-between align-items-center"><div class="flex justify-between items-center">`);
  _push(ssrRenderComponent(_component_counterBox, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>${ssrInterpolate(_ctx.count)}</p>`);
      } else {
        return [
          createVNode("p", {
            textContent: toDisplayString(_ctx.count)
          }, null, 8, ["textContent"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<h3 class="text-base font-bold">`);
  _push(ssrRenderComponent(_component_font, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Quantity`);
            } else {
              return [
                createTextVNode("Quantity")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, null, {
            default: withCtx(() => [
              createTextVNode("Quantity")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3></div><div class="mt-3"><button class="dc-btn">Order Now</button></div></div><div style="${ssrRenderStyle({ "border-bottom": "1px solid #F2F2F2", "margin-top": "25px", "margin-bottom": "15px" })}"></div><h3 style="${ssrRenderStyle({ "font-size": "16px", "font-weight": "bold" })}">`);
  _push(ssrRenderComponent(_component_font, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Save this offer for later`);
            } else {
              return [
                createTextVNode("Save this offer for later")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, null, {
            default: withCtx(() => [
              createTextVNode("Save this offer for later")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h3><button class="bg-gray-200 dc-btn-2"><a href="whatsapp://send?text=Hello World!&amp;phone=+8801925202096">Send it to me via WhatsApp</a></button><div style="${ssrRenderStyle({ "border-bottom": "1px solid #F2F2F2", "margin-top": "25px", "margin-bottom": "15px" })}" class="mb-4"></div></div></section><section style="${ssrRenderStyle(_ctx.isShow ? null : { display: "none" })}" class="text-end"><div class="container text-center"><div class="border-solid border-2 border-slate-100 rounded-lg px-2 pb-3"><h1 class="text-2xl text-center mb-4 mt-3">`);
  _push(ssrRenderComponent(_component_font, { style: { "vertical-align": "inherit" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Order it now`);
            } else {
              return [
                createTextVNode("Order it now")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, null, {
            default: withCtx(() => [
              createTextVNode("Order it now")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h1><form class="text-end"><div class="mb-2 selt-frm"><input class="pr-3 w-full pl-8 py-3" type="text" placeholder="The name" style="${ssrRenderStyle({ "background": "#f2f2f2", "border-style": "none" })}"></div><div class="mb-2 relative selt-frm"><input class="pr-3 w-full pl-8 form-control py-3" type="text" placeholder="xxx xxx xxx" style="${ssrRenderStyle({ "background": "#f2f2f2", "border-style": "none", "padding-left": "83px", "direction": "ltr" })}"><div class="flex items-center absolute" style="${ssrRenderStyle({ "top": "50%", "transform": "translateY(-50%)", "left": "20px" })}"><span>`);
  _push(ssrRenderComponent(_component_font, { style: { "vertical-align": "inherit" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, { style: { "vertical-align": "inherit" } }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`05\xA0\xA0`);
            } else {
              return [
                createTextVNode("05\xA0\xA0")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, { style: { "vertical-align": "inherit" } }, {
            default: withCtx(() => [
              createTextVNode("05\xA0\xA0")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span><img src="https://cdn.countryflags.com/thumbs/saudi-arabia/flag-400.png" class="w-5"></div></div><div class="mb-2 frm-s form-select relative py-3 pr-3 pl-8 selt-frm"><select class="w-full text-end" style="${ssrRenderStyle({ "background": "#f2f2f2", "border-style": "none" })}"><option value="1">`);
  _push(ssrRenderComponent(_component_font, { class: "vertical-align: inherit;" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, { class: "vertical-align: inherit;" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Jaddah`);
            } else {
              return [
                createTextVNode("Jaddah")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, { class: "vertical-align: inherit;" }, {
            default: withCtx(() => [
              createTextVNode("Jaddah")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</option><option value="2">`);
  _push(ssrRenderComponent(_component_font, { class: "vertical-align: inherit;" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, { class: "vertical-align: inherit;" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Makkah`);
            } else {
              return [
                createTextVNode("Makkah")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, { class: "vertical-align: inherit;" }, {
            default: withCtx(() => [
              createTextVNode("Makkah")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</option><option value="3">`);
  _push(ssrRenderComponent(_component_font, { class: "vertical-align: inherit;" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, { class: "vertical-align: inherit;" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Riyadh`);
            } else {
              return [
                createTextVNode("Riyadh")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, { class: "vertical-align: inherit;" }, {
            default: withCtx(() => [
              createTextVNode("Riyadh")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</option></select><i class="fas fa-chevron-down" style="${ssrRenderStyle({ "position": "absolute", "top": "50%", "transform": "translateY(-50%)", "left": "20px" })}"></i></div><div class="frm-s flex justify-between selt-frm-txt mt-3"><span>`);
  _push(ssrRenderComponent(_component_font, { class: "vertical-align: inherit;" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, { class: "vertical-align: inherit;" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Width of 4 liters`);
            } else {
              return [
                createTextVNode("Width of 4 liters")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, { class: "vertical-align: inherit;" }, {
            default: withCtx(() => [
              createTextVNode("Width of 4 liters")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span><span>`);
  _push(ssrRenderComponent(_component_font, { class: "vertical-align: inherit;" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, { class: "vertical-align: inherit;" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`x1`);
            } else {
              return [
                createTextVNode("x1")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, { class: "vertical-align: inherit;" }, {
            default: withCtx(() => [
              createTextVNode("x1")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span></div><div class="flex justify-between selt-frm-txt mt-3"><span>`);
  _push(ssrRenderComponent(_component_font, { class: "vertical-align: inherit;" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, { class: "vertical-align: inherit;" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`The price includes tax`);
            } else {
              return [
                createTextVNode("The price includes tax")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, { class: "vertical-align: inherit;" }, {
            default: withCtx(() => [
              createTextVNode("The price includes tax")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span><span>`);
  _push(ssrRenderComponent(_component_font, { class: "vertical-align: inherit;" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, { class: "vertical-align: inherit;" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`100 SAR`);
            } else {
              return [
                createTextVNode("100 SAR")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, { class: "vertical-align: inherit;" }, {
            default: withCtx(() => [
              createTextVNode("100 SAR")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span></div><div class="flex justify-between selt-frm-txt mt-3"><span>`);
  _push(ssrRenderComponent(_component_font, { class: "vertical-align: inherit;" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, { class: "vertical-align: inherit;" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Fast shipping`);
            } else {
              return [
                createTextVNode("Fast shipping")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, { class: "vertical-align: inherit;" }, {
            default: withCtx(() => [
              createTextVNode("Fast shipping")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span><span>`);
  _push(ssrRenderComponent(_component_font, { class: "vertical-align: inherit;" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, { class: "vertical-align: inherit;" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Complimentary`);
            } else {
              return [
                createTextVNode("Complimentary")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, { class: "vertical-align: inherit;" }, {
            default: withCtx(() => [
              createTextVNode("Complimentary")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span></div><div class="selt-frm-txt-d"></div><div class="flex justify-between selt-frm-txt mt-3"><span style="${ssrRenderStyle({ "font-weight": "bold" })}">`);
  _push(ssrRenderComponent(_component_font, { style: { "vertical-align": "inherit" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, { style: { "vertical-align": "inherit" } }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Total`);
            } else {
              return [
                createTextVNode("Total")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, { style: { "vertical-align": "inherit" } }, {
            default: withCtx(() => [
              createTextVNode("Total")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span><span class="font-weight: bold;">`);
  _push(ssrRenderComponent(_component_font, { class: "vertical-align: inherit;" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, { class: "vertical-align: inherit;" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`100 SAR`);
            } else {
              return [
                createTextVNode("100 SAR")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, { class: "vertical-align: inherit;" }, {
            default: withCtx(() => [
              createTextVNode("100 SAR")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span></div><div class="mt-3"><button class="dc-btn">Purchase</button></div></form></div></div></section><section class="flex justify-start"><div class="w-24 ml-6 mt-12"><img${ssrRenderAttr("src", _imports_2)}></div></section><section class="flex justify-end"><div class="w-full max-w-sm mbimg140"><img${ssrRenderAttr("src", _imports_3)}></div></section><section class="text-end frmbtm mt-(-48) pt-48"><div class="container" style="${ssrRenderStyle({ "padding-bottom": "38px" })}"><h2 style="${ssrRenderStyle({ "color": "#343434" })}" class="text-4xl flex justify-end mb-3 mt-5">`);
  _push(ssrRenderComponent(_component_font, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Why Safwat Al Jouf?`);
            } else {
              return [
                createTextVNode("Why Safwat Al Jouf?")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, null, {
            default: withCtx(() => [
              createTextVNode("Why Safwat Al Jouf?")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h2><p class="flex justify-end" style="${ssrRenderStyle({ "color": "#343434" })}">`);
  _push(ssrRenderComponent(_component_font, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Because we offer a luxurious and 100% organic product that takes care of your food quality and health.`);
            } else {
              return [
                createTextVNode("Because we offer a luxurious and 100% organic product that takes care of your food quality and health.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, null, {
            default: withCtx(() => [
              createTextVNode("Because we offer a luxurious and 100% organic product that takes care of your food quality and health.")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><div><h2 style="${ssrRenderStyle({ "font-size": "30px", "color": "#343434" })}" class="mb-3 flex justify-end mt-4">`);
  _push(ssrRenderComponent(_component_font, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\xA0Crop quality`);
            } else {
              return [
                createTextVNode("\xA0Crop quality")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, null, {
            default: withCtx(() => [
              createTextVNode("\xA0Crop quality")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 flex justify-end chk-icn h-6"><path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd"></path></svg></h2><p class="flex justify-end" style="${ssrRenderStyle({ "font-size": "16px", "color": "#343434" })}">`);
  _push(ssrRenderComponent(_component_font, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`On our farm over 800,000 olive trees produce the best crop annually, however we do an inventory of the crop to exclude defective olives to ensure the best oil at the time of pressing.`);
            } else {
              return [
                createTextVNode("On our farm over 800,000 olive trees produce the best crop annually, however we do an inventory of the crop to exclude defective olives to ensure the best oil at the time of pressing.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, null, {
            default: withCtx(() => [
              createTextVNode("On our farm over 800,000 olive trees produce the best crop annually, however we do an inventory of the crop to exclude defective olives to ensure the best oil at the time of pressing.")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></div><div><h2 style="${ssrRenderStyle({ "font-size": "30px", "color": "#343434" })}" class="mb-3 flex justify-end mt-3">`);
  _push(ssrRenderComponent(_component_font, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\xA0Less acidity`);
            } else {
              return [
                createTextVNode("\xA0Less acidity")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, null, {
            default: withCtx(() => [
              createTextVNode("\xA0Less acidity")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 flex justify-end chk-icn h-6"><path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd"></path></svg></h2><p class="flex justify-end" style="${ssrRenderStyle({ "font-size": "16px", "color": "#343434" })}">`);
  _push(ssrRenderComponent(_component_font, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`The low acidity of the oil is evidence of its quality, and we are proud in the elite of Al-Jawf that our oil has the lowest acidity in the region, with a ratio of 0.3`);
            } else {
              return [
                createTextVNode("The low acidity of the oil is evidence of its quality, and we are proud in the elite of Al-Jawf that our oil has the lowest acidity in the region, with a ratio of 0.3")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, null, {
            default: withCtx(() => [
              createTextVNode("The low acidity of the oil is evidence of its quality, and we are proud in the elite of Al-Jawf that our oil has the lowest acidity in the region, with a ratio of 0.3")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></div><div><h2 style="${ssrRenderStyle({ "font-size": "30px", "color": "#343434" })}" class="mb-3 flex justify-end mt-3">`);
  _push(ssrRenderComponent(_component_font, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\xA0Distinctive taste`);
            } else {
              return [
                createTextVNode("\xA0Distinctive taste")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, null, {
            default: withCtx(() => [
              createTextVNode("\xA0Distinctive taste")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 flex justify-end chk-icn h-6"><path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd"></path></svg></h2><p class="flex justify-end" style="${ssrRenderStyle({ "font-size": "16px", "color": "#343434" })}">`);
  _push(ssrRenderComponent(_component_font, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Safwat Al-Jouf oil is a delicious addition to your dishes that conveys its flavor to a different stage of deliciousness, thanks to its excellent taste without bitterness.`);
            } else {
              return [
                createTextVNode("Safwat Al-Jouf oil is a delicious addition to your dishes that conveys its flavor to a different stage of deliciousness, thanks to its excellent taste without bitterness.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, null, {
            default: withCtx(() => [
              createTextVNode("Safwat Al-Jouf oil is a delicious addition to your dishes that conveys its flavor to a different stage of deliciousness, thanks to its excellent taste without bitterness.")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></div><div class="mt-3"><button class="dc-btn">Purchase</button></div></div></section><section class="text-end pt-4 pb-6"><div class="container"><h1 style="${ssrRenderStyle({ "text-align": "center", "font-size": "30px" })}"><span style="${ssrRenderStyle({ "font-weight": "bold", "font-family": "sans-serif" })}">`);
  _push(ssrRenderComponent(_component_font, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`+200,000`);
            } else {
              return [
                createTextVNode("+200,000")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, null, {
            default: withCtx(() => [
              createTextVNode("+200,000")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span>`);
  _push(ssrRenderComponent(_component_font, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` \xA0customers `);
            } else {
              return [
                createTextVNode(" \xA0customers ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, null, {
            default: withCtx(() => [
              createTextVNode(" \xA0customers ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<br>`);
  _push(ssrRenderComponent(_component_font, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`trust the elite of Al-Jouf`);
            } else {
              return [
                createTextVNode("trust the elite of Al-Jouf")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, null, {
            default: withCtx(() => [
              createTextVNode("trust the elite of Al-Jouf")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h1><div class="flex justify-center pt-0 mt-3" style="${ssrRenderStyle({ "text-align": "center" })}"><div class="flex text-center p-2"><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span></div><span class="flex p-2 text-xs">`);
  _push(ssrRenderComponent(_component_font, { class: "vertical-align: inherit;" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, { class: "vertical-align: inherit;" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`4.8 out of 5`);
            } else {
              return [
                createTextVNode("4.8 out of 5")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, { class: "vertical-align: inherit;" }, {
            default: withCtx(() => [
              createTextVNode("4.8 out of 5")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span></div><div class="flex mt-4 py-4 px-2" style="${ssrRenderStyle({ "border-radius": "8px", "border": "1px solid #f2f2f2" })}"><div class="flex-1"><div class="flex-1 justify-between align-items-start"><span class="flex justify-start"><span class="bg-yellow-400 flex text-xs border rounded-full py-1 px-3">`);
  _push(ssrRenderComponent(_component_font, { class: "vertical-align: inherit;" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, { class: "vertical-align: inherit;" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\xA0He made the purchase`);
            } else {
              return [
                createTextVNode("\xA0He made the purchase")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, { class: "vertical-align: inherit;" }, {
            default: withCtx(() => [
              createTextVNode("\xA0He made the purchase")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="flex flex-row-reverse mr-1 w-4 h-4"><path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd"></path></svg></span></span><div class="flex flex-row-reverse"><img${ssrRenderAttr("src", _imports_4)} class="w-12 rvw-avt-img"></div><div class="rvw-txt pr-8 -top-4"><span class="font-bold">`);
  _push(ssrRenderComponent(_component_font, { class: "vertical-align: inherit;" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, { class: "vertical-align: inherit;" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Abdullah Al-Dhiab`);
            } else {
              return [
                createTextVNode("Abdullah Al-Dhiab")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, { class: "vertical-align: inherit;" }, {
            default: withCtx(() => [
              createTextVNode("Abdullah Al-Dhiab")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span><div class="flex justify-end p-2"><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span></div><p class="mt-2 mb-0">`);
  _push(ssrRenderComponent(_component_font, { style: { "vertical-align": "inherit" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font, { style: { "vertical-align": "inherit" } }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`The best and coolest product`);
            } else {
              return [
                createTextVNode("The best and coolest product")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_font, { style: { "vertical-align": "inherit" } }, {
            default: withCtx(() => [
              createTextVNode("The best and coolest product")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></div></div></div></div></div></section><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-f34541f2.mjs.map
