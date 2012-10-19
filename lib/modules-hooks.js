/**
 * @file
 * Interface to manage hooks.
 */

'use strict';

var hooks = {};

// Object of hooks registered.
var modules = {};

/**
 * Invoke a hook, call the modules registered on this hook,
 * and do some actions afterwards.
 *
 * @param hook string
 *   The hook to invoke.
 * @param data array
 *   Array of data to pass to the modules registered on the hook.
 * @param callback function
 *   The callback function to call.
 */
hooks.invoke = function( hook, data, callback ) {
    // Get all the hooks and fire them.
    modules[ hook ].forEach( function( hookCallback ) {
        hookCallback( data, callback );
    });
};

/**
 * Register a module on a hook.
 *
 * @param hook string
 *   The hook on which to register.
 * @param callback function
 *   The callback function used when the hook is invoked.
 */
hooks.on = function( hook, callback ) {
    // Add the module to the list of modules.
    if ( !Array.isArray( modules[ hook ] ) ) {
        modules[ hook ] = [];
    }
    modules[ hook ].push( callback );
};

module.exports = hooks;
