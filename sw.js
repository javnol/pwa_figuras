var nombreCache='uno';

self.addEventListener(
    'install',
    function(event){
        event.waitUntil(
            caches.open(nombreCache)
            .then(
                function(cache){
                    cache.addAll(
                        [
                            'fig.js',
                            'w3.css'
                        ]
                    );        
                }
            )
        );    
    }
);

self.addEventListener(
    'fetch', 
    function(event) {
        event.respondWith( 
            caches.match(event.request)
            .then(
                function(respuesta){
                    if(respuesta){
                        console.log('La respuesta proviene de la cache');
                        return respuesta;
                    }   
                    else{
                        console.log('La respuesta no proviene de la cache');
                        return fetch(event.request);
                    }  
                }
            ) 
        );
    }
); 