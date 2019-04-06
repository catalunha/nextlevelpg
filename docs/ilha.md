Indice:
- [Empresa](#empresa)
	- [nextlevel](#nextlevel)
		- [ev.nextlevel](#evnextlevel)
		- [api.nextlevel](#apinextlevel)
- [Produtos](#produtos)
	- [XtraPower](#xtrapower)
	- [XtraPower Gel](#xtrapower-gel)
	- [Tesão de Vaca](#tes%C3%A3o-de-vaca)
	- [Bomba Peniana](#bomba-peniana)
	- [SkinGold](#skingold)
- [Dominios](#dominios)
- [Advertoriais](#advertoriais)
	- [Fora da ilha - Localweb](#fora-da-ilha---localweb)
		- [https://crescerbembrasil.com](#httpscrescerbembrasilcom)
		- [https://ultracuriosoblog.com](#httpsultracuriosoblogcom)
		- [https://xbrasilvideos.com](#httpsxbrasilvideoscom)

-----

Este ilha se localiza no DigitalOcean, exceções serão citadas.

# Empresa

## nextlevel

* https://nextlevelmarketing.com.br/
  
<!-- 
~~~
server {
	listen 80;
	listen [::]:80;

        server_name www.nextlevelmarketing.com.br nextlevelmarketing.com.br;

	root /var/www/html/empresa/nextlevel;
	index index.html index.htm index.nginx-debian.html;

	location / {
		# First attempt to serve request as file, then
		# as directory, then fall back to displaying a 404.
		try_files $uri $uri/ /index.html =404;
	}

    listen [::]:443 ssl ipv6only=on; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/nextlevelmarketing.com.br/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/nextlevelmarketing.com.br/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}

~~~
-->

### ev.nextlevel

* https://ev.nextlevelmarketing.com.br/

<!-- ~~~
server {
	listen 80;
	listen [::]:80;

        server_name ev.nextlevelmarketing.com.br;

	root /var/www/html/empresa/ev-nextlevel;
	index index.html index.htm index.nginx-debian.html;

	location / {
		# First attempt to serve request as file, then
		# as directory, then fall back to displaying a 404.
		try_files $uri $uri/ /index.html =404;
	}

    listen [::]:443 ssl; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/api.nextlevelmarketing.com.br/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/api.nextlevelmarketing.com.br/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
~~~ -->

### api.nextlevel

* https://api.nextlevelmarketing.com.br/

<!-- 
~~~
server {
	listen 80;
	listen [::]:80;

        server_name api.nextlevelmarketing.com.br;

	root /var/www/html/empresa/api-nextlevel;
	index index.html index.htm index.nginx-debian.html;

	location / {
		# First attempt to serve request as file, then
		# as directory, then fall back to displaying a 404.
		try_files $uri $uri/ /index.html =404;
	}

    listen [::]:443 ssl; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/api.nextlevelmarketing.com.br/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/api.nextlevelmarketing.com.br/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
~~~
 -->

# Produtos

## XtraPower
* https://xtrapoweroficial.com/

<!-- ~~~
server {
	listen 80;
	listen [::]:80;

        server_name www.xtrapoweroficial.com xtrapoweroficial.com;

	root /var/www/html/produtos/xtrapower;
	index index.html index.htm index.nginx-debian.html;

	location / {
		# First attempt to serve request as file, then
		# as directory, then fall back to displaying a 404.
		try_files $uri $uri/ /index.html =404;
	}

    listen [::]:443 ssl; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/www.xtrapoweroficial.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/www.xtrapoweroficial.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot


}

~~~ -->
## XtraPower Gel

* https://gel.xtrapoweroficial.com/

<!-- ~~~
server {
	listen 80;
	listen [::]:80;

        server_name gel.xtrapoweroficial.com;

	root /var/www/html/produtos/gel-xtrapower;
	index index.html index.htm index.nginx-debian.html;

	location / {
		# First attempt to serve request as file, then
		# as directory, then fall back to displaying a 404.
		try_files $uri $uri/ /index.html =404;
	}

    listen [::]:443 ssl; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/bombapeniana.xtrapoweroficial.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/bombapeniana.xtrapoweroficial.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}

~~~ -->
## Tesão de Vaca

* https://tesaodevaca.xtrapoweroficial.com/

<!-- ~~~
server {
	listen 80;
	listen [::]:80;

        server_name tesaodevaca.xtrapoweroficial.com;

	root /var/www/html/produtos/tesaodevaca-xtrapower;
	index index.html index.htm index.nginx-debian.html;

	location / {
		# First attempt to serve request as file, then
		# as directory, then fall back to displaying a 404.
		try_files $uri $uri/ /index.html =404;
	}

    listen [::]:443 ssl; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/bombapeniana.xtrapoweroficial.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/bombapeniana.xtrapoweroficial.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}

~~~ -->

## Bomba Peniana

* https://bombapeniana.xtrapoweroficial.com/

<!-- 
~~~
server {
	listen 80;
	listen [::]:80;

        server_name bombapeniana.xtrapoweroficial.com;

	root /var/www/html/produtos/bombapeniana-xtrapower;
	index index.html index.htm index.nginx-debian.html;

	location / {
		# First attempt to serve request as file, then
		# as directory, then fall back to displaying a 404.
		try_files $uri $uri/ /index.html =404;
	}

    listen [::]:443 ssl; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/bombapeniana.xtrapoweroficial.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/bombapeniana.xtrapoweroficial.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}

~~~ -->

## SkinGold
* https://skingoldcare.com/
 
<!-- ~~~
server {
	listen 80;
	listen [::]:80;

        server_name www.skingoldcare.com skingoldcare.com;

	root /var/www/html/produtos/skingold;
	index index.html index.htm index.nginx-debian.html;

	location / {
		# First attempt to serve request as file, then
		# as directory, then fall back to displaying a 404.
		try_files $uri $uri/ /index.html =404;
	}

    listen [::]:443 ssl; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/www.skingoldcare.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/www.skingoldcare.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot


}

~~~ -->

# Dominios

<!-- omit in toc --> 
<!-- 
http://saudequeimpressiona.com/ 
-->

# Advertoriais

## Fora da ilha - Localweb

### https://crescerbembrasil.com

### https://ultracuriosoblog.com

### https://xbrasilvideos.com
