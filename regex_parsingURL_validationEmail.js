(function main() {
    console.log(
        "m d k, m d k, m d k".replace(/(m d k)/g,  '$1 a')
    );
    
    // Validation checking email
        var emailRegex = /([\da-zA-Z_-]+)@([\da-zA-Z_-]+).([\da-zA-Z_-]{2,6})?/;
        var emails = [
            "addmin@gmail.com",
            "addmingmail.com",
            "addmi#@ngmail.com",
            "addmi#@ngmail.c",
        ];
        function emailValidator(emails, regex){
            var result = [];
            for (let i = 0; i<emails.length;i++){
                if(emails[i].match(emailRegex) != null){
                    result.push(emails[i] + " --> VALID")
                } else {
                    result.push(emails[i] + " --> false")
                }
            }  
            return result;
        }
    
        console.log(
            emailValidator(emails, emailRegex)
        );
    
    // --------------------
    // parsing url in node js
    // --------------------
        // regex with groups: protocol, domain, zone, port, suburl, hashtag
        var urlRegex = /(http|https):\/\/([a-zA-Z-]+).([a-z]{2,}):?([0-9]{4})?((\/[a-zA-Z0-9?=]+){0,})(#[a-zA-Z0-9_-]{0,})?/g;
    
        // here the result will be stored
        var result = {};
        function parser(
                    match, 
                     protocol, domain,  zone,  port, suburl, hashtag
                    ){
                    var prot = protocol,
                        dom = domain,
                        zone = zone,
                        p = port,
                        surl = suburl,
                        htag = hashtag;
                    result =  {
                             protocol: protocol, 
                             domain: domain, 
                             zone: zone, 
                             port: port,
                             suburl: suburl,
                             hashtag: hashtag
                        }
                        return true;
                    }
            // running URL parser
            "https://yandex.ru:7890/video/455#hash_tag".replace(urlRegex, parser)
        console.dir(
            result
        );
    // --------------------
    // END OF parsing url in node js
    // --------------------
    
}());