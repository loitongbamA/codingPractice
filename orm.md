

# ORM (Object Relational Mapping)

>## SOURCE
<a id="source" href= "https://www.prisma.io/docs/concepts/overview/prisma-in-your-stack/is-prisma-an-orm#what-are-orms">Prisma docs</a>


WHAT is ORM?
- provide a high-level database abstraction
- expose a programmatic interface through objects to manipulate data (CRUD)
- while hiding some of the complexity of the database
- define models as classes that maps to tables in DB
- instance of the class provides API to do CRUS operations
- classes as the main building blocks

## ORM patterns

- Data Mapper
- Active Record

### Data Mapper
- incorparates in-memory objects (objects representing data in DB)
- incorporates data mapper layer to transfer data between two
- incorporates two types of classes
    - Entity classes:
        - application's in memory entity and no db related things.
    - Mapper Classes:
        - responsible for transforming data between
        -  generates necessary db query to fetch or
        - persist data into DB



### Active Record
- maps model classes to DB tables
- each field in the model matches column in db table
- instances of the model carries data and logic (including business logic) to persist changes in DB

[READ more](#source)
