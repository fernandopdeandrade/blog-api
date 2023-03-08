## Projeto Blogs API  

## O que devo desenvolver?

Você desenvolverá uma API e um banco de dados para a produção de conteúdo para um blog! Para isso, desenvolverá uma aplicação em Node.js usando o pacote sequelize para fazer um CRUD de posts. Assim, você deve:

- Desenvolver endpoints que estarão conectados ao seu banco de dados seguindo os princípios do REST;
- Trabalhar a relação user e post, visto que para fazer um post é necessário usuário e login
- Trabalhar a relação de posts para categories e de categories para posts, visto que será necessária a utilização categorias para os posts.

#### Abrir essa Issue e o PR

- [ ] Abrir Issue
- [ ] Abri o PR

#### Pré-Requisitos do Projeto:
- [ ] Rodar o docker com mysql e nodejs ou testar localmente as configurações em sua máquina
- [ ] Efetuar a leitura das Informações importantes sobre o projeto, dicas, como o modelo do banco de dados será criado e utilizado

#### Requisitos obrigatórios do Projeto:
- [ ] 1 - Crie migrations para as entidades User, Categories, BlogPosts, PostCategories 
- [ ] 2 - Crie o modelo 'User' em 'src/database/models/user.js' com as propriedades corretas 
- [ ] 3 - Sua aplicação deve ter o endpoint POST /login 
- [ ] 4 - Sua aplicação deve ter o endpoint POST /user 
- [ ] 5 - Sua aplicação deve ter o endpoint GET /user 
- [ ] 6 - Sua aplicação deve ter o endpoint GET /user/:id 
- [ ] 7 - Crie o modelo 'Category' em 'src/database/models/category.js' com as propriedades corretas
- [ ] 8 - Sua aplicação deve ter o endpoint POST /categories 
- [ ] 9 - Sua aplicação deve ter o endpoint GET /categories
- [ ] 10 - Crie o modelo 'BlogPost' em 'src/database/models/blogPost.js' com as propriedades e associações corretas 
- [ ] 11 - Crie o modelo 'PostCategory' em 'src/database/models/postCategory.js' com as propriedades e associações corretas 
- [ ] 12 - Sua aplicação deve ter o endpoint POST /post 
- [ ] 13 - Sua aplicação deve ter o endpoint GET /post 
- [ ] 14 - Sua aplicação deve ter o endpoint GET /post/:id 
- [ ] 15 - Sua aplicação deve ter o endpoint PUT /post/:id 

#### Requisitos bônus do Projeto:
- [ ] 16 - Sua aplicação deve ter o endpoint DELETE /post/:id
- [ ] 17 - Sua aplicação deve ter o endpoint DELETE /user/me
- [ ] 18 - Sua aplicação deve ter o endpoint GET /post/search?q=:searchTerm
