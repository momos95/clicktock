ClickTock : 

A server that delivers the current time (reduced to the current minute). This answer must be accompanied by the appropriate caching instruction to prevent clients to ask for the same result during the same minute. Suppose that the server receives a request (any GET request will do) at 9:23:12 (9 hours, 23 minutes and 12 seconds) then the answer will be 23 and that answer will be valid till 9:24:00.




