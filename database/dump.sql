--
-- PostgreSQL database dump
--

-- Dumped from database version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
ALTER TABLE ONLY public.carts DROP CONSTRAINT carts_pkey;
ALTER TABLE ONLY public."cartItems" DROP CONSTRAINT "cartItems_pkey";
ALTER TABLE public.products ALTER COLUMN "productId" DROP DEFAULT;
ALTER TABLE public.orders ALTER COLUMN "orderId" DROP DEFAULT;
ALTER TABLE public.carts ALTER COLUMN "cartId" DROP DEFAULT;
ALTER TABLE public."cartItems" ALTER COLUMN "cartItemId" DROP DEFAULT;
DROP SEQUENCE public."products_productId_seq";
DROP TABLE public.products;
DROP SEQUENCE public."orders_orderId_seq";
DROP TABLE public.orders;
DROP SEQUENCE public."carts_cartId_seq";
DROP TABLE public.carts;
DROP SEQUENCE public."cartItems_cartItemId_seq";
DROP TABLE public."cartItems";
DROP EXTENSION plpgsql;
DROP SCHEMA public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: cartItems; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."cartItems" (
    "cartItemId" integer NOT NULL,
    "cartId" integer NOT NULL,
    "productId" integer NOT NULL,
    price integer NOT NULL,
    quantity integer,
    "totalPrice" integer
);


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."cartItems_cartItemId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."cartItems_cartItemId_seq" OWNED BY public."cartItems"."cartItemId";


--
-- Name: carts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.carts (
    "cartId" integer NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: carts_cartId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."carts_cartId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: carts_cartId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."carts_cartId_seq" OWNED BY public.carts."cartId";


--
-- Name: orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orders (
    "orderId" integer NOT NULL,
    "cartId" integer NOT NULL,
    name text NOT NULL,
    "creditCard" text NOT NULL,
    "shippingAddress" text NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


--
-- Name: orders_orderId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."orders_orderId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: orders_orderId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."orders_orderId_seq" OWNED BY public.orders."orderId";


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    "productId" integer NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    image text NOT NULL,
    "shortDescription" text NOT NULL,
    "longDescription" text NOT NULL
);


--
-- Name: products_productId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."products_productId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: products_productId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."products_productId_seq" OWNED BY public.products."productId";


--
-- Name: cartItems cartItemId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems" ALTER COLUMN "cartItemId" SET DEFAULT nextval('public."cartItems_cartItemId_seq"'::regclass);


--
-- Name: carts cartId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts ALTER COLUMN "cartId" SET DEFAULT nextval('public."carts_cartId_seq"'::regclass);


--
-- Name: orders orderId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders ALTER COLUMN "orderId" SET DEFAULT nextval('public."orders_orderId_seq"'::regclass);


--
-- Name: products productId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN "productId" SET DEFAULT nextval('public."products_productId_seq"'::regclass);


--
-- Data for Name: cartItems; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."cartItems" ("cartItemId", "cartId", "productId", price, quantity, "totalPrice") FROM stdin;
1	4	1	2999	\N	\N
2	5	1	2999	\N	\N
3	6	1	2999	\N	\N
4	7	1	2999	\N	\N
5	8	1	2999	\N	\N
6	9	2	2595	\N	\N
7	10	2	2595	\N	\N
8	11	2	2595	\N	\N
9	12	2	2595	\N	\N
10	13	2	2595	\N	\N
11	14	3	2900	\N	\N
12	14	2	2595	\N	\N
13	14	3	2900	\N	\N
14	14	3	2900	\N	\N
15	14	1	2999	\N	\N
16	14	2	2595	\N	\N
17	15	2	2595	\N	\N
18	15	5	9900	\N	\N
19	15	4	999	\N	\N
20	15	1	2999	\N	\N
21	16	3	2900	\N	\N
22	17	3	2900	\N	\N
23	18	3	2900	\N	\N
24	19	3	2900	\N	\N
25	19	2	2595	\N	\N
26	20	1	2999	\N	\N
27	20	2	2595	\N	\N
28	20	5	9900	\N	\N
29	20	6	830	\N	\N
30	21	3	2900	\N	\N
31	21	2	2595	\N	\N
32	21	1	2999	\N	\N
33	21	6	830	\N	\N
34	22	3	2900	\N	\N
35	23	3	2900	\N	\N
36	24	1	2999	\N	\N
37	24	1	2999	\N	\N
38	25	3	2900	\N	\N
39	26	1	9999	\N	\N
40	26	1	9999	\N	\N
41	26	1	9999	\N	\N
42	26	1	9999	\N	\N
43	26	1	9999	\N	\N
44	26	1	9999	\N	\N
45	26	1	9999	\N	\N
46	26	1	9999	\N	\N
47	26	1	9999	\N	\N
48	26	1	9999	\N	\N
49	26	1	9999	\N	\N
50	26	2	11000	\N	\N
51	26	1	9999	\N	\N
52	26	1	9999	\N	\N
53	26	1	9999	\N	\N
54	26	1	9999	\N	\N
55	26	1	9999	\N	\N
56	26	1	9999	\N	\N
57	26	1	9999	\N	\N
58	26	1	9999	\N	\N
59	26	1	9999	\N	\N
60	26	1	9999	\N	\N
61	26	1	9999	\N	\N
62	26	1	9999	\N	\N
63	26	1	9999	\N	\N
64	26	1	9999	\N	\N
65	26	1	9999	\N	\N
66	26	1	9999	\N	\N
67	26	1	9999	\N	\N
68	26	2	11000	\N	\N
69	26	1	9999	\N	\N
70	26	2	11000	\N	\N
71	26	1	9999	\N	\N
72	26	1	9999	\N	\N
73	26	1	9999	\N	\N
74	26	1	9999	\N	\N
75	26	1	9999	\N	\N
76	26	1	9999	\N	\N
77	26	1	9999	\N	\N
78	26	1	9999	\N	\N
79	26	1	9999	\N	\N
80	27	1	9999	\N	\N
81	28	2	11000	\N	\N
82	29	1	9999	\N	\N
98	34	2	11000	4	44000
99	34	3	12000	1	12000
118	30	2	11000	2	22000
119	30	3	12000	3	36000
120	30	6	9999	2	19998
\.


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.carts ("cartId", "createdAt") FROM stdin;
1	2020-03-11 14:30:07.646176-08
2	2020-03-11 14:52:12.508422-08
3	2020-03-11 14:53:47.131146-08
4	2020-03-11 15:57:53.169156-08
5	2020-03-11 16:33:26.502421-08
6	2020-03-11 16:38:00.706323-08
7	2020-03-11 16:39:14.824288-08
8	2020-03-11 16:41:22.30281-08
9	2020-03-11 16:51:35.344693-08
10	2020-03-11 16:55:56.705398-08
11	2020-03-11 16:56:10.164889-08
12	2020-03-11 17:38:22.057292-08
13	2020-03-11 19:15:19.920752-08
14	2020-03-12 10:39:38.107954-08
15	2020-03-13 09:08:08.417721-08
16	2020-03-13 10:47:10.028532-08
17	2020-03-13 14:03:33.888062-08
18	2020-03-13 14:49:51.124266-08
19	2020-03-13 15:00:44.657146-08
20	2020-03-13 15:54:48.951935-08
21	2020-03-13 15:58:24.906399-08
22	2020-04-06 11:05:18.22049-08
23	2020-04-07 12:53:14.009517-08
24	2020-04-08 14:20:23.763903-08
25	2020-04-08 14:23:59.438755-08
26	2020-04-10 11:16:22.845636-08
27	2020-04-15 09:26:50.970496-08
28	2020-04-16 11:27:24.18025-08
29	2020-04-16 14:05:24.864834-08
30	2020-04-22 12:52:18.143036-08
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.orders ("orderId", "cartId", name, "creditCard", "shippingAddress", "createdAt") FROM stdin;
4	16	Timmmayyy	123456678	123 LearningFuze	2020-03-13 10:47:23.198611-08
5	17	Blake	1234 1234 1234 1234	123 LearningFuze	2020-03-13 14:48:46.190682-08
6	18	Blake Ros	1234 1234 1234 1234	123 LearningFuze	2020-03-13 14:50:05.907488-08
7	19	Blake Ros	1234 1234 1234 1234	123 LearningFuze	2020-03-13 15:54:33.555685-08
8	20	Jack Choi	4321 4321 4321 4321	432 LearningFuze Dr	2020-03-13 15:55:28.385813-08
9	21	Timmay is Pai Mei	1234 1234 1234 1234	123 Teaching Students Dr	2020-03-13 15:59:42.121609-08
10	24	a	a	a	2020-04-08 14:23:55.288614-08
11	25	a	a	a	2020-04-08 14:26:47.771038-08
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.products ("productId", name, price, image, "shortDescription", "longDescription") FROM stdin;
1	S60 Moonrocks	9999	/images/S60-Moonrocks.jpg	A NASA enthusiasts dream keycap set	Includes a fully programmable software via QMK software. RBG Underglow for moonlight effects. Compact and efficient 65% layout. This product is made from high grade Doubleshot polycarbonate plastics. S60 is inspired by intellect and craftsmanship that transpires into their work on this unique piece. Additionally this set offers additional keycaps for numpad and bonus keycap sets for spacebar, espape, and backspace. If you choose this S60 keycap set you will not be dissapointed
2	GMK Dolphin	11000	/images/GMK-Dolphin.jpg	A clean ocean blue and grey keycap set	This GMK keycap set had ocean lovers in mind with this subtle varieties of ocean blue colors. Every GMK product is unique and this one is no different. If you're looking for a product that fits a water lifestyle then this is the keycap set for you. The soft grey color mixed in with the strong blue gives inspiration to the dolphin. This keycap set is created with Cherry's original double-shot molding equipment using the highest quality ABS plastic, and we have used custom colors specifically for this set to achieve the high contrast aesthetic of this ocean inspired colorway.
3	SA Symbiosis	12000	/images/SA-Symbiosis.jpg	A masterfully crafted unique keycap set	If you want to stand out then this keycap set is for you. SA has done it again with this masterfully crafted roman numeral inspired keycap set. The yellow enter keycap ties in all the soft grey and blue notes of this keycap set. The origin Symbolics keyboards were engineering masterpieces. The Symbiosis keycap set provides an updated experience with full sculpting and improved legends. Made out of Doubleshot ABS materials.
4	SA Royalty	10999	/images/SA-Royalty.jpg	A Bespoke take on an iconic Royal colorway	First conceived by the first time keycap artist ye cole and manufactured by Maxkey, draws colors from diverse sources. Its primary visual inspiration is The Royal Tenenbaums, a critically acclaimed Wes Anderson film set in an atemporal rendition of New York City. Royalty also borrows from sepia-toned photographs and traditional Japanese temples. We think the set brings to mind a Will Ferrell-esque vision of the 1970s, including its computer industry. Shades of red were liberally applied to mainfram panels and suits alike.
5	SA Nuclear	6900	/images/SA-Nuclear.png	A rich green and purple mix of keycaps modeling a nuclear reactor	A full set of double shot keycaps for Cherry switches, USA layout, Filco Majestouch keyboards. This set contains every keycap for the full size 104 key USA Majestouch keyboard but will fit a USA Tenkeyles too. These keycaps come with costar stabilizers glued in place. You can carefully remove them for Cherry stabs.
6	PBT Sherbert	9999	/images/PBT-Sherbert.png	Gradient shebert ice cream inspired keycap colorway.	121 Key PBT Double Shot Backlist Keycap Set - Rainbow Sherbert. This keyboard set comes with the standard 104-key Base Set with + 17 add-on keys. The only six-tone PBT backlist keycap set currently available. Great shine-through performance. Legends are clearly visible with high-luminance LED. Additional 8-key kit for ISO layout keybards are available with this set.
\.


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."cartItems_cartItemId_seq"', 120, true);


--
-- Name: carts_cartId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."carts_cartId_seq"', 30, true);


--
-- Name: orders_orderId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."orders_orderId_seq"', 11, true);


--
-- Name: products_productId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."products_productId_seq"', 1, false);


--
-- Name: cartItems cartItems_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."cartItems"
    ADD CONSTRAINT "cartItems_pkey" PRIMARY KEY ("cartItemId");


--
-- Name: carts carts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY ("cartId");


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY ("orderId");


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY ("productId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

