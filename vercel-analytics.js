/*
 * Vercel Web Analytics
 * Standalone initialization for static HTML sites
 * Based on @vercel/analytics package v1.6.1
 */
(function() {
  'use strict';
  
  // Initialize the queue
  function initQueue() {
    if (window.va) return;
    window.va = function a() {
      (window.vaq = window.vaq || []).push(arguments);
    };
  }
  
  // Inject the analytics script
  function inject(props) {
    props = props || { debug: true };
    
    // Set mode (production/development)
    var mode = props.mode || 'production';
    try {
      if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'development') {
        mode = 'development';
      }
    } catch (e) {}
    window.vam = mode;
    
    initQueue();
    
    // Get script source
    var src = props.scriptSrc;
    if (!src) {
      if (mode === 'development') {
        src = 'https://va.vercel-scripts.com/v1/script.debug.js';
      } else {
        src = '/_vercel/insights/script.js';
      }
    }
    
    // Check if script already exists
    if (document.head.querySelector('script[src*="' + src + '"]')) return;
    
    // Create and configure script element
    var script = document.createElement('script');
    script.src = src;
    script.defer = true;
    script.dataset.sdkn = '@vercel/analytics' + (props.framework ? '/' + props.framework : '');
    script.dataset.sdkv = '1.6.1';
    
    if (props.beforeSend && window.va) {
      window.va('beforeSend', props.beforeSend);
    }
    
    if (props.disableAutoTrack) {
      script.dataset.disableAutoTrack = '1';
    }
    
    if (props.endpoint) {
      script.dataset.endpoint = props.endpoint;
    }
    
    if (props.dsn) {
      script.dataset.dsn = props.dsn;
    }
    
    script.onerror = function() {
      var errorMessage = mode === 'development' 
        ? 'Please check if any ad blockers are enabled and try again.'
        : 'Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.';
      console.log('[Vercel Web Analytics] Failed to load script from ' + src + '. ' + errorMessage);
    };
    
    if (mode === 'development' && props.debug === false) {
      script.dataset.debug = 'false';
    }
    
    document.head.appendChild(script);
  }
  
  // Initialize analytics
  inject({ mode: 'auto' });
})();
