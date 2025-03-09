[General]
bypass-system = true
skip-proxy = 192.168.0.0/16, 10.0.0.0/8, 172.16.0.0/12, localhost, *.local, captive.apple.com
tun-excluded-routes = 10.0.0.0/8, 100.64.0.0/10, 127.0.0.0/8, 169.254.0.0/16, 172.16.0.0/12, 192.168.0.0/16
dns-server = 8.8.8.8, 8.8.4.4
fallback-dns-server = 1.1.1.1, 9.9.9.9
ipv6 = false

[Rule]
DOMAIN-SUFFIX,capcut.com,DIRECT
DOMAIN-SUFFIX,capcutapi.com,DIRECT
DOMAIN-SUFFIX,passport16-normal-sg.capcutapi.com,DIRECT
DOMAIN-SUFFIX,feed16-normal-myb.capcutapi.com,DIRECT
DOMAIN-SUFFIX,tnc-sg.capcutapi.com,DIRECT
DOMAIN-SUFFIX,subscription.capcutapi.com,DIRECT
DOMAIN-SUFFIX,purchase.capcutapi.com,DIRECT
DOMAIN-SUFFIX,pay16-normal-alisg.pipopay.com,DIRECT
DOMAIN-SUFFIX,firebaseappcheck.googleapis.com,REJECT
GEOIP,CN,DIRECT
IP-CIDR,0.0.0.0/0,DIRECT
IP-CIDR6,::/0,DIRECT

[Rewrite]
^https?:\/\/subscription.capcutapi.com\/verify url script-response-body https://raw.githubusercontent.com/nino8386/Hab/refs/heads/main/ccp.js
^https?:\/\/purchase.capcutapi.com\/.* url script-response-body https://raw.githubusercontent.com/nino8386/Hab/refs/heads/main/ccp.js

[Script]
subscription_fix = type=http-response,pattern=^https?:\/\/subscription.capcutapi.com\/verify,requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/nino8386/Hab/refs/heads/main/ccp.js
purchase_fix = type=http-response,pattern=^https?:\/\/purchase.capcutapi.com\/.*,requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/nino8386/Hab/refs/heads/main/ccp.js

delete_header_subscription = type=http-request,pattern=^https?:\/\/subscription.capcutapi.com\/.*,script-path=https://raw.githubusercontent.com/nino8386/Hab/refs/heads/main/deleteheader.js
delete_header_purchase = type=http-request,pattern=^https?:\/\/purchase.capcutapi.com\/.*,script-path=https://raw.githubusercontent.com/nino8386/Hab/refs/heads/main/deleteheader.js

[MITM]
hostname = %APPEND% subscription.capcutapi.com, purchase.capcutapi.com

