function o(e,t){let n=Object.getOwnPropertyNames(e);const r={};for(let a=0;a<n.length;a++){const i=n[a],s=i.indexOf("$");s!==-1&&t.indexOf(i.substring(0,s+1))!==-1||t.indexOf(i)===-1&&(r[i]=e[i])}return r}function c(e,t){let n=Object.getOwnPropertyNames(e);const r={};for(let a=0;a<n.length;a++){const i=n[a];i.substring(0,t.length)===t&&(r[i.substring(t.length)]=e[i])}return r}/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var f=function(){function e(){this.rafIDs=new Map}return e.prototype.request=function(t,n){var r=this;this.cancel(t);var a=requestAnimationFrame(function(i){r.rafIDs.delete(t),n(i)});this.rafIDs.set(t,a)},e.prototype.cancel=function(t){var n=this.rafIDs.get(t);n&&(cancelAnimationFrame(n),this.rafIDs.delete(t))},e.prototype.cancelAll=function(){var t=this;this.rafIDs.forEach(function(n,r){t.cancel(r)})},e.prototype.getQueue=function(){var t=[];return this.rafIDs.forEach(function(n,r){t.push(r)}),t},e}();export{f as A,o as e,c as p};
