// Support landing only: never exchange codes, reflect query data or auto-open apps.
const failed = new URLSearchParams(location.search).has('error') || new URLSearchParams(location.search).has('error_code') || /(?:^|&)error(?:_code)?=/.test(location.hash.slice(1));
history.replaceState(null, '', location.pathname);
if (failed) {
 document.querySelector('#return-title').textContent = 'This link couldn’t finish';
 document.querySelector('#return-copy').textContent = 'The confirmation link may have expired or already been used. Try signing in. If your email still needs verification, request a fresh confirmation from the account creation form.';
}
