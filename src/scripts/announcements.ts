import { v4 as uuidv4 } from "uuid";

interface announcement {
	id: string;
	title: string;
	date: string;
	sender: string;
	content: string;
}

export const announcementData: announcement[] = [
	{
		id: uuidv4(),
		title: "Dzień Liczby Pi",
		date: `2024 - 03 - 12`,
		sender: "Magdalena Jeleń",
		content: `Drodzy Uczniowie,
		konkurs Pitagoras i Liczba Pi - matematyczni bohaterowie" odbędzie się 14 marca w auli szkolnej w godz. 10.20-11.05 (4 lekcja).
		WSKAZÓWKA dla uczestników (zgłoszonych drużyn): jedna z konkurencji będzie związana z rozwinięciem dziesiętnym liczby Pi :)`,
	},
	{
		id: uuidv4(),
		title: "Wycieczka do Pragi",
		date: `2024 - 02 - 28`,
		sender: "Anita Lis",
		content: `ZAPRASZAMY DO UDZIAŁU W WYCIECZCE W TERMINIE JESIENNYM (WRZESIEŃ / PAŹDZIERNIK)

		Szczegóły poniżej, zapisy u p. Anity Lis i p. Pauliny Bigaj (do 25.03.2024r lub do wyczerpania miejsc)
		
		Praga - piękna stolica Czech i gorące Karlowe Wary
		
		DZIEŃ 1
		Godzina 06:00 - Wyjazd
		• Przyjazd do PRAGI
		• Odwiedzimy jej najpiękniejsze miejsca: Klasztor na Strachowie, słynny z bardzo bogatych zbiorów bibliotecznych. Spacer Dzielnicę Hradczany: Plac Loretański, gdzie zobaczymy barokową kopię domku Loretańskiego tzw. „Santa Casa”, w którym wg. legendy zasnęła Matka Boża, jak głosi legenda przeniesionego przez anioły w celu ochrony przed Turkami. Kolejnym punktem będzie przepiękna zabudowa pałacowa m.in. pałace Szwarzenbergów, Arcybiskupi, Toskański, Czerniński. Zmiana warty przed zamkiem, spacer po terenie Hradu – największego kompleksu zamkowego w Czechach, w trakcie którego zobaczymy katedrę św. Wita, bazylikę św. Jerzego, kaplicę wszystkich świętych, stary i nowy Pałac Królewski. Możliwość wejścia na Złotą Uliczkę oraz zwiedzenia wnętrz pałacowych. Przejście na Małą Strane, spacer - Pałac Wallensteina, Rynek Małostrański z barokową świątynią pod wezwaniem św. Mikołaja, droga królewska, Most Karola z barokowymi pomnikami świętych, wyspa Kampa.
		• Główny rynek – Rynek Nowomiejski, na którym znajduje się pomnik Jana Husa i jeden z najsłynniejszych zabytków Praskich – ratusz staromiejski z zegarem Orloy. Kontynuacja spaceru po starym mieście - Kościół Marii Panny przed Tynem, ulica Celetna, Brama Prochowa, secesyjny dom miejski, Karolineum – najstarszy uniwersytet w tej części Europy ufundowany przez Karola IV, Plac Wacława z monumentalnym budynkiem Muzeum.
		• Rejs statkiem po Wełtawie
		• Z napiętego planu zobaczymy tyle na ile wystarczy nam sił i czasu
		Godzina 19:00 – przejazd do obiektu noclegowego w okolicy Pragi, obiadokolacja
		zakwaterowanie, czas na odpoczynek
		
		DZIEŃ 2
		Godzina 08:00 - śniadanie
		Godzina 11:00 – przyjazd do uzdrowiska Karlowe Wary
		• Zwiedzanie malowniczo położonego uzdrowiska w zachodnich Czechach. Kurowali się tu m.in. Karol Marks, Johann Wolfgang Goethe, Wolfgang Amadeusz Mozart, Ludwig van Beethoven, Adam Mickiewicz… Spacer po zabytkowym centrum, w którym znajdują się liczne pijalnie wód, promenada oraz aleje spacerowe. Udamy się w poszukiwaniu gorących źródeł, których jest tutaj ponad 70, a w samym centrum 13. Zobaczymy Młyńską Kolumnadę, To właśnie tu znaleźć można aż 5 źródeł, gdzie temperatura wody sięga aż 50 stopni. Kolumnadę Żeliwną, Zamkową, Targową, Ukrop. Hotel Thermal, Wieżę widokową o pięknym imieniu Diana, która stoi na szczycie Výšina přátelství, z którego można podziwiać fantastyczne widoki na tą okolicę. Zobaczymy Cerkiew Św. Piotra I Pawła, i Kościół Św. Piotra I Pawła.
		• Wizyta w pobliskim malowniczo położonym w zakolu rzeki Ohrzy, miasteczku Loket, które powstało na dawnym podzamczu. Spacer po urokliwych, średniowiecznych uliczkach z widokiem na zamek. Późnym popołudniem powrót do centrum Pragi.
		Godzina 19:00 – przejazd do obiektu noclegowego w okolicy Pragi, obiadokolacja
		
		DZIEŃ 3
		Godzina 07:30 - śniadanie i wykwaterowanie
		• Dalsze zwiedzanie Pragi
		• Spacer po Wyszehradzie – to na tym wzgórzu, znajdowała się pierwsza siedziba Przemyślidów. Zobaczymy m.in. Łaźnie Libuszy, Katedrę św. Piotra i Pawła, Rotundę św. Marcina oraz Slavin – cmentarz, na którym pochowani są wybitni ludzie mający ogromny wkład w historię Czech. Następnie udamy się na Nowe Miasto ufundowane przez Karola IV jako oddzielne miasto handlowe, w którym do dnia dzisiejszego zachował się oryginalny układ ulic. W trakcie spaceru zobaczymy m.in główny plac Nowego Miasta – Plac Karola (przy którym znajdują się m.in. Budynek Jezuickich akademików, kościół p.w. św. Ignacego z Loyoly, Dom Fausta, Nowomiejski Ratusz), Klasztor Emaus, Kościół p.w. św. Metodego i Cyryla, Tańczący dom – przykład nowoczesnej zabudowy, neorenesansowy Teatr Narodoy – symbol ruchu odrodzenia.
		Godzina 13:00 – obiad przed drogą powrotną zarezerwowany w restauracji + około 250 CZK
		Godzina 14:30 – wyjazd w kierunku Chrzanowa – powrót około 21:30
		
		CENA przy minimum 45 osobach płacących 860 zł
		Cena zawiera: transport komfortowym autokarem/opłaty drogowe i parkingowe/ ubezpieczenie NNW i KL/2 x nocleg w pokojach kilkuosobowych w obiektach hotelarskich lub pensjonatach /2 x śniadanie,2 x obiadokolacja/ opiekę pilota wycieczek / przewodnika oprowadzającego po Pradze/ obowiązkowe składki TFP i TFG/ zestawy słuchawkowe lub system nagłaśniający
		Nocleg w Hotelu Sport (lub obiekcie o podobnym standardzie)
		https://hotel-sport.cz/en/
		Cena nie zawiera: Ew. biletów wstępu do zwiedzanych miejsc, obiadu w ostatnim dniu (250 CZK)
		NA WSTĘPY NALEŻY PRZEZNACZYĆ OKOŁO 800 KORON CZESKICH (około150zł)
		Rejs Statkiem, Kościół Św. Mikołaja, Hradczany - trasa B (Stary Pałac Królewski, Bazylika św. Jerzego, Złota Uliczka, Katedra św. Wita ), Biblioteka klasztoru na Strahovie
		Jest to wstępna propozycja, jej plan i cena może ulec małej zmianie.`,
	},
	{
		id: uuidv4(),
		title: `Konkurs ekologiczny w języku angielskim`,
		date: "2024 - 02 - 26",
		sender: "Anita Lis",
		content: `Drodzy uczniowie!
		Przypominamy o Ekologicznym Konkursie Filmowym i Fotokastowym "Zero Waste i Zrównoważony Rozwój" w języku angielskim.
		Szczegóły w ogłoszeniu z dn. 3.11.2023r. lub u p. Pauliny Bigaj i Anity Lis`,
	},
	{
		id: uuidv4(),
		title: "Konkurs ekologiczny w języku angielskim",
		date: "2023 - 11 - 03",
		sender: "Paulina Bigaj",
		content: `Drodzy uczniowie!

		Zapraszamy do udziału w konkursie ekologicznym w języku angielskim. Poniżej szczegóły:
		
		Ekologiczy Konkurs Filmowy i Fotokastowy "Zero Waste i Zrównoważony Rozwój" w języku angielskim.
		
		Konkurs jest otwarty dla wszystkich uczniów Zespołu Szkół w Libiążu. 
		Każdy uczestnik/ grupa uczestników może zgłosić jedną pracę w każdej kategorii, ale nie więcej niż dwie prace w konkursie. 
		Prace mogą być zgłaszane indywidualnie lub w grupach maksymalnie 3 osobowych. 
		
		TEMATY
		 
		I. Kategoria Film 
		
		1. "Wpływ Konsumpcji na Zrównoważony Rozwój i zasadę Zero Waste" 
		
		Przygotuj film, który ukazuje wpływ naszych codziennych wyborów konsumenckich na zrównoważony rozwój i ideę Zero Waste ze szczególnym naciskiem na produkcję odpadów. 
		
		  lub
		
		2. "Inspirujące Inicjatywy: Lokalne Projekty na rzecz Zero Waste oraz Zrównoważonego Rozwoju".
		
		Nagraj film, który prezentuje lokalne projekty i inicjatywy wspierające "Zero Waste" i Zrównoważony Rozwój w naszej lokalnej społeczności. 
		
		 
		II. Kategoria Fotokast 
		
		
		1. "Świadoma Konsumpcja: Obraz i Historia" 
		
		Stwórz fotokast przedstawiający wybory konsumenckie i historie produktów, które wspierają zrównoważony rozwój.
		
		2. "Współczesne Wyzwania Ekologiczne" 
		
		Stwórz fotoreportaż ukazujący aktualne wyzwania ekologiczne, takie jak zanieczyszczenie plastikiem i zmiany klimatu. 
		
		
		
		Termin nadsyłania prac: 
		
		Prace konkursowe należy składać od 13 listopada do 21 marca do pani Anity Lis lub pani Pauliny Bigaj przez komunikator MS TEAMS (czat prywatny) lub na nośniku danych. 
		
		 
		Zasady dla prac filmowych: 
		
		Filmy powinny być krótkometrażowe i mieć długość
		2 - 5 minut. 
		Wszystkie filmy muszą być w języku angielskim lub posiadać napisy w tym języku. 
		Filmy muszą być oryginalne, stworzone samodzielnie i nie mogą naruszać praw autorskich innych twórców. 
		
		Format zgłoszenia filmu: preferowany format zgłoszenia - plik w formacie MP4. 
		
		 
		Zasady dla prac fotokastowych: 
		
		Fotokasty powinny składać się z zestawu zdjęć wraz z towarzyszącym im komentarzem lub opisem wyłącznie w języku angielskim. Każdy zestaw powinien zawierać co najmniej 10 fotografii. Zdjęcia muszą być oryginalne i autorstwa uczestników. 
		
		Format zgłoszenia fotokastu: preferowany format zgłoszenia - plik w formacie MP4. 
		
		 
		Ocenianie i nagrody:
		
		Prace będą oceniane przez komisję konkursową na podstawie  
		
		- kreatywności, 
		
		- związku z tematem,  
		
		- jakości technicznej i przekazu 
		
		- poprawności i walorów językowych 
		
		Nagrody zostaną przyznane osobno w kategoriach Filmowej i Fotokastowej. 
		
		Zapraszamy do udziału w konkursie!
		
		W celu uzyskania dodatkowych informacji lub wglądu do regulaminu zapraszamy do kontaktu z organizatorkami - p. Anitą Lis oraz p. Pauliną Bigaj.
		 
		Pozdrawiamy!`,
	},
];
