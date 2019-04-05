
# Empresa

## nextlevel

* https://nextlevelmarketing.com.br/
  
Porta: http://68.183.150.108:8070
<!-- 
~~~
/etc/nginx/sites-available/$
sudo nano nextlevel.conf
server {
	listen 8070;
	listen [::]:8070;

        server_name 68.183.150.108:8070;

	root /var/www/html/nextlevel;
	index index.html index.htm index.nginx-debian.html;

	location / {
		# First attempt to serve request as file, then
		# as directory, then fall back to displaying a 404.
		try_files $uri $uri/ /index.html =404;
	}
}
ln -s /etc/nginx/sites-available/nextlevel.conf ../sites-enabled/nextlevel
~~~ -->

### ev.nextlevel

* https://ev.nextlevelmarketing.com.br/

Porta: http://68.183.150.108:8071
<!-- ~~~
/etc/nginx/sites-available/$
sudo nano ev-nextlevel.conf
server {
	listen 8071;
	listen [::]:8071;

        server_name 68.183.150.108:8071;

	root /var/www/html/nextlevel;
	index index.html index.htm index.nginx-debian.html;

	location / {
		# First attempt to serve request as file, then
		# as directory, then fall back to displaying a 404.
		try_files $uri $uri/ /index.html =404;
	}
}
ln -s /etc/nginx/sites-available/ev-nextlevel.conf ../sites-enabled/ev-nextlevel
~~~ -->

### api.nextlevel

* https://api.nextlevelmarketing.com.br/

Porta: http://68.183.150.108:8072
<!-- ~~~
/etc/nginx/sites-available/$
sudo nano api-nextlevel.conf
server {
	listen 8072;
	listen [::]:8072;

        server_name 68.183.150.108:8072;

	root /var/www/html/api-nextlevel;
	index index.html index.htm index.nginx-debian.html;

	location / {
		# First attempt to serve request as file, then
		# as directory, then fall back to displaying a 404.
		try_files $uri $uri/ /index.html =404;
	}
}
ln -s /etc/nginx/sites-available/api-nextlevel.conf ../sites-enabled/api-nextlevel
~~~ -->

# Produtos

## XtraPower
* https://xtrapoweroficial.com/

Porta: http://68.183.150.108:8073
<!-- ~~~
/etc/nginx/sites-available/$
sudo nano xtrapower.conf
server {
	listen 8073;
	listen [::]:8073;

        server_name 68.183.150.108:8073;

	root /var/www/html/xtrapower;
	index index.html index.htm index.nginx-debian.html;

	location / {
		# First attempt to serve request as file, then
		# as directory, then fall back to displaying a 404.
		try_files $uri $uri/ /index.html =404;
	}
}
ln -s /etc/nginx/sites-available/xtrapower.conf ../sites-enabled/xtrapower
~~~ -->
## XtraPower Gel

* https://gel.xtrapoweroficial.com/

Porta: http://68.183.150.108:8074
<!-- ~~~
/etc/nginx/sites-available/$
sudo nano gel-xtrapower.conf
server {
	listen 8074;
	listen [::]:8074;

        server_name 68.183.150.108:8074;

	root /var/www/html/gel-xtrapower;
	index index.html index.htm index.nginx-debian.html;

	location / {
		# First attempt to serve request as file, then
		# as directory, then fall back to displaying a 404.
		try_files $uri $uri/ /index.html =404;
	}
}
ln -s /etc/nginx/sites-available/gel-xtrapower.conf ../sites-enabled/gel-xtrapower
~~~ -->
## Tesão de Vaca

* https://tesaodevaca.xtrapoweroficial.com/

Porta: http://68.183.150.108:8075
<!-- ~~~
/etc/nginx/sites-available/$
sudo nano tesaodevaca-xtrapower.conf
server {
	listen 8075;
	listen [::]:8075;

        server_name 68.183.150.108:8075;

	root /var/www/html/tesaodevaca-xtrapower;
	index index.html index.htm index.nginx-debian.html;

	location / {
		# First attempt to serve request as file, then
		# as directory, then fall back to displaying a 404.
		try_files $uri $uri/ /index.html =404;
	}
}
ln -s /etc/nginx/sites-available/tesaodevaca-xtrapower.conf ../sites-enabled/tesaodevaca-xtrapower
~~~ -->

## Bomba Peniana

* https://bombapeniana.xtrapoweroficial.com/

Porta: http://68.183.150.108:8076
<!-- 
~~~
/etc/nginx/sites-available/$
sudo nano bombapeniana-xtrapower.conf
server {
	listen 8076;
	listen [::]:8076;

        server_name 68.183.150.108:8076;

	root /var/www/html/bombapeniana-xtrapower;
	index index.html index.htm index.nginx-debian.html;

	location / {
		# First attempt to serve request as file, then
		# as directory, then fall back to displaying a 404.
		try_files $uri $uri/ /index.html =404;
	}
}
ln -s /etc/nginx/sites-available/bombapeniana-xtrapower.conf ../sites-enabled/bombapeniana-xtrapower
~~~ -->

## SkinGold
* https://skingoldcare.com/
* 
Porta: http://68.183.150.108:8077
<!-- ~~~
/etc/nginx/sites-available/$
sudo nano skingold.conf
server {
	listen 8077;
	listen [::]:8077;

        server_name 68.183.150.108:8077;

	root /var/www/html/skingold;
	index index.html index.htm index.nginx-debian.html;

	location / {
		# First attempt to serve request as file, then
		# as directory, then fall back to displaying a 404.
		try_files $uri $uri/ /index.html =404;
	}
}
ln -s /etc/nginx/sites-available/skingold.conf ../sites-enabled/skingold
~~~ -->


<!-- grep -rl 'qwerty' ./| xargs sed -i's/qwerty/poiuy/g' -->



# Advertoriais

Varios dominios para qq adv
<!-- 
https://www.digitalocean.com/community/tutorials/como-utilizar-o-sftp-para-transferir-arquivos-com-seguranca-com-um-servidor-remoto-pt
##
* https://
  * http://68.183.150.108:8080/

# Servidor de paginas
## Listando /var/www/html
~~~
drwxr-xr-x 2 root root 4096 Apr  4 00:07 api-nextlevel
drwxr-xr-x 2 root root 4096 Apr  4 00:05 bombapeniana-xtrapower
drwxr-xr-x 2 root root 4096 Apr  4 00:06 ev-nextlevel
drwxr-xr-x 2 root root 4096 Apr  4 00:03 gel-xtrapower
drwxr-xr-x 2 root root 4096 Apr  4 00:06 nextlevel
drwxr-xr-x 2 root root 4096 Apr  4 00:05 skingold
drwxr-xr-x 2 root root 4096 Apr  4 00:04 tesaodevaca-xtrapower
drwxr-xr-x 2 root root 4096 Apr  4 00:07 xtrapower
~~~

## criando portas
ufw status
ufw allow 8070
ufw allow 8071
ufw allow 8072
ufw allow 8073
ufw allow 8074
ufw allow 8075
ufw allow 8076
ufw allow 8077

# Tutoriais

Simulando na porta 
-->
<!-- https://bobcares.com/blog/digitalocean-open-port-8080/ -->
<!-- 
# Outros itens

sudo service nginx restart
 -->

