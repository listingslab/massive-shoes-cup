--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0
-- Dumped by pg_dump version 16.0

-- Started on 2023-09-29 16:42:37 CEST

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 16401)
-- Name: events; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.events (
    event_id bigint NOT NULL,
    event_name text,
    odds numeric
);


ALTER TABLE public.events OWNER TO postgres;

--
-- TOC entry 3587 (class 0 OID 16401)
-- Dependencies: 215
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.events (event_id, event_name, odds) FROM stdin;
5	Cowboy Boots vs Kitten Heels	2.25
4	Adidas Superstars vs Big Red Boot	3.33
3	Big Foot 2.0 vs Puddle Boots	1.25
2	Proenza Schouler vs Loewe's	1.75
1	Crocs vs Paris Fashion Week	2.00
\.


--
-- TOC entry 3443 (class 2606 OID 16407)
-- Name: events events_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_pkey PRIMARY KEY (event_id);


-- Completed on 2023-09-29 16:42:37 CEST

--
-- PostgreSQL database dump complete
--

