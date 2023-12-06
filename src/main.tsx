import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Main.css";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Row from "./Components/Rows/Row.tsx";
import Top10 from "./Components/Top10/Top10.tsx";

const Movies = [
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYKRaK0JCekFQTCrTgru7t8jDY5AeJxTAmQABfCm5V7nzaKwIHe6giIREzhj6mjpiXifRuXdPESidjjq-SCHk_IuttzlZ2wTOhE.jpg?r=f8a",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQpzbo9fiXwS7U-gwA51RGkfgE0swgGDp4tsPdyNqh3iLaJTJPT3ObvFwgu_dLEFUUN-2KwEMAeFH0NiOY_yJoy2ap6gmG7-foE.jpg?r=329",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcTAiQkIFBgaKW9VsBfODraRDgYb9etsArxLsbD8nYl7cQSkC8M9zwnf-jK3zdevulvPhF_XFgEDCLlnoeM8Ck8cWaASmAIZv18.webp?r=3bd",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABW29tEpL31IN6GcBSkNpTiOOBGjzhomo1flY9TzWx1znhhyXx-0V3mpKfv_hWIiZx-5DaCc5KDXAliBWxyEcraoNRMqrRnid0Mg.jpg?r=880",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfXhxlOVnD9kEfg4954CQNBVfwPVfcg1LOGHdznfNpg7Da02WW188CBHEcdkeG9XNY7l9SaEzC0k4vQQYcaq4Ku0SN-pg4LmxFk.jpg?r=d04",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbGa1eqv70--d3wQ3OGNno7bUAuy2xB5pKHJ2Q55CEu5NL4226x5k4Q5LsRYvr4Ot24sbUWYcbqtb2COYIuuBZMJz1F9IOmNnas.jpg?r=994",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWzOF6YUMbkp6bCynxRL-xfVup90Y4jZLJAI_0PCcqzo7haDnYosOI3R2VHeGovtS1P8t13iAn4SH61TAHooNmlsFG8Q1H5hhZNjXsVTbZ0l-B3wXLe6Tp48XDPePXADsR0G.jpg?r=8da",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABV6yLGmDJ9lVnNswoH5TTQ7C5wIs1KqHVNtz1T0tMaQux19GM_eRDo-RZetUOqXa4k_K3bKUHVwRek2Y5U3TDdrfnVDNg_QDluk.jpg?r=583",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb5iaPOs1FEFyU7X6Kbb8x8QqYHo8R2uflj3ZRaDvUyGbHhGzd_f1VVSm6yucAsQ0VP_WQtruU1q3nZtHm4GsuG1UU7q2ZTbedQ.jpg?r=528",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcG0ZqeD_pDB-1aMlSQIgHPw3-edKcBEeBOwNnSMEgDBMpC4dw3ygzt-igR4GSGsXLpM6146yygluNhCj_ZosPW-0YWY4stSqsg.jpg?r=0ad",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABboabvkLwzBhpkh3cZkg_8qLAYhJ8Hgeht7ddQ7AF_35wFynyva_ioxyODYL-miPeNhOZhL6S14mD8yif8UZl--T8UjIql3LXSdguA7wHGdFw1SEEMaAdjL0PO64S8HKOwlH.jpg?r=386",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWWeSClEmPfunaX09NYRBku9N8DyE_TYKei3UWws3Zz1dukuXZDCDbcWAA4f5rGlwI4ISrXP2f3oW0Px33hb8IvWYVuW2nu7frRCm4HH5bSrwJNPS3kZ2rZk6enLPFHt0Gjz.jpg?r=76c",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSTB0C_qGsKOd2v4CTBOOu7fzZo15AptnpME14bHzbM0gzrpv2GF_pJ5zu1Zu14VIGHo4v2JGHDLOc_FHNds1opA-usvl9knZ_c.jpg?r=5f8",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdOphxwZ6lEqXK4aJo-MjUdZUInT4rw7TCbJFSA0xaG6_2qpl1sWBpZv1XcW2jZCknB4Mer06eX2nLDG9rxWHQUEsIvUUIpwWjuxHhqviWddRTIAIZCwnGZqOLXrOtDkh3BJ.jpg?r=360",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVWLX08EDaViaLl5iVHk_pO60JprdtZpLsHpeVfufBxXZfa2XHgfQpGQkC1iJUfNPt_-Ye7GnQlYM0CJYQY8ENq_q_uFljDTAcg.jpg?r=d02",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUYGQUvp6eX5H-UWHpTNEpPaFWR4vSKys0Rki-1ubpxKrGsa3vwUTXmBu0tamu8TFvPXFYR0HpHTyChntnSjiy7uJ1-ZhkTLjvs.jpg?r=2a5",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWEIGpAMnjqApk59juXGfAFMSSUPF8qrFBKUiFdOZb0It48KT2764BeyEB_vrYceWBtZE6KUPvb3cFlOW4SfcsfW-fW8aLu1XZ8.jpg?r=dee",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRZlfDmu0Vc7LsmuF4u2rvoQjPtYkscXqkP6ZJUn6kMTCRh13iyfOzpBxTzHLfmAB0oYTz4fbMzP5NL9GCc3pvw-zp5RGhdzOaIDYN9dsaoCyrCoOGax_nyj2eHNY7KFVfhQ.jpg?r=5bb",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABU_n4AmTteloPLyG_uBXYrZiPZIfrUupZOtS2RZjg3j36DgFlRYQHnVyt0cMBSeNBuWkYf4qzpuvbzJdtIIDmhMaSzr4ZfjwFf4MMSu7MACQtXclAEcstuWmfCXNwGtwK_j_.jpg?r=597",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb2SjnfZKaK8vfubF2aGiKYnVS5FYmcFMxev1BiE70xjLdrtqw0B_gF5NrZQVpib7Yf7qcYFRSGziBLIaUJlur9LyLqcMkiP1eE5frGDz-Q5OKTsn9TupLSeWRmZCukWRDTG.jpg?r=484",
];

const Movies2 = [
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWzOF6YUMbkp6bCynxRL-xfVup90Y4jZLJAI_0PCcqzo7haDnYosOI3R2VHeGovtS1P8t13iAn4SH61TAHooNmlsFG8Q1H5hhZNjXsVTbZ0l-B3wXLe6Tp48XDPePXADsR0G.jpg?r=8da",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABV6yLGmDJ9lVnNswoH5TTQ7C5wIs1KqHVNtz1T0tMaQux19GM_eRDo-RZetUOqXa4k_K3bKUHVwRek2Y5U3TDdrfnVDNg_QDluk.jpg?r=583",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb5iaPOs1FEFyU7X6Kbb8x8QqYHo8R2uflj3ZRaDvUyGbHhGzd_f1VVSm6yucAsQ0VP_WQtruU1q3nZtHm4GsuG1UU7q2ZTbedQ.jpg?r=528",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcG0ZqeD_pDB-1aMlSQIgHPw3-edKcBEeBOwNnSMEgDBMpC4dw3ygzt-igR4GSGsXLpM6146yygluNhCj_ZosPW-0YWY4stSqsg.jpg?r=0ad",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABboabvkLwzBhpkh3cZkg_8qLAYhJ8Hgeht7ddQ7AF_35wFynyva_ioxyODYL-miPeNhOZhL6S14mD8yif8UZl--T8UjIql3LXSdguA7wHGdFw1SEEMaAdjL0PO64S8HKOwlH.jpg?r=386",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWWeSClEmPfunaX09NYRBku9N8DyE_TYKei3UWws3Zz1dukuXZDCDbcWAA4f5rGlwI4ISrXP2f3oW0Px33hb8IvWYVuW2nu7frRCm4HH5bSrwJNPS3kZ2rZk6enLPFHt0Gjz.jpg?r=76c",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSTB0C_qGsKOd2v4CTBOOu7fzZo15AptnpME14bHzbM0gzrpv2GF_pJ5zu1Zu14VIGHo4v2JGHDLOc_FHNds1opA-usvl9knZ_c.jpg?r=5f8",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdOphxwZ6lEqXK4aJo-MjUdZUInT4rw7TCbJFSA0xaG6_2qpl1sWBpZv1XcW2jZCknB4Mer06eX2nLDG9rxWHQUEsIvUUIpwWjuxHhqviWddRTIAIZCwnGZqOLXrOtDkh3BJ.jpg?r=360",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVWLX08EDaViaLl5iVHk_pO60JprdtZpLsHpeVfufBxXZfa2XHgfQpGQkC1iJUfNPt_-Ye7GnQlYM0CJYQY8ENq_q_uFljDTAcg.jpg?r=d02",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUYGQUvp6eX5H-UWHpTNEpPaFWR4vSKys0Rki-1ubpxKrGsa3vwUTXmBu0tamu8TFvPXFYR0HpHTyChntnSjiy7uJ1-ZhkTLjvs.jpg?r=2a5",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYKRaK0JCekFQTCrTgru7t8jDY5AeJxTAmQABfCm5V7nzaKwIHe6giIREzhj6mjpiXifRuXdPESidjjq-SCHk_IuttzlZ2wTOhE.jpg?r=f8a",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQpzbo9fiXwS7U-gwA51RGkfgE0swgGDp4tsPdyNqh3iLaJTJPT3ObvFwgu_dLEFUUN-2KwEMAeFH0NiOY_yJoy2ap6gmG7-foE.jpg?r=329",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcTAiQkIFBgaKW9VsBfODraRDgYb9etsArxLsbD8nYl7cQSkC8M9zwnf-jK3zdevulvPhF_XFgEDCLlnoeM8Ck8cWaASmAIZv18.webp?r=3bd",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABW29tEpL31IN6GcBSkNpTiOOBGjzhomo1flY9TzWx1znhhyXx-0V3mpKfv_hWIiZx-5DaCc5KDXAliBWxyEcraoNRMqrRnid0Mg.jpg?r=880",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfXhxlOVnD9kEfg4954CQNBVfwPVfcg1LOGHdznfNpg7Da02WW188CBHEcdkeG9XNY7l9SaEzC0k4vQQYcaq4Ku0SN-pg4LmxFk.jpg?r=d04",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbGa1eqv70--d3wQ3OGNno7bUAuy2xB5pKHJ2Q55CEu5NL4226x5k4Q5LsRYvr4Ot24sbUWYcbqtb2COYIuuBZMJz1F9IOmNnas.jpg?r=994",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWEIGpAMnjqApk59juXGfAFMSSUPF8qrFBKUiFdOZb0It48KT2764BeyEB_vrYceWBtZE6KUPvb3cFlOW4SfcsfW-fW8aLu1XZ8.jpg?r=dee",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRZlfDmu0Vc7LsmuF4u2rvoQjPtYkscXqkP6ZJUn6kMTCRh13iyfOzpBxTzHLfmAB0oYTz4fbMzP5NL9GCc3pvw-zp5RGhdzOaIDYN9dsaoCyrCoOGax_nyj2eHNY7KFVfhQ.jpg?r=5bb",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABU_n4AmTteloPLyG_uBXYrZiPZIfrUupZOtS2RZjg3j36DgFlRYQHnVyt0cMBSeNBuWkYf4qzpuvbzJdtIIDmhMaSzr4ZfjwFf4MMSu7MACQtXclAEcstuWmfCXNwGtwK_j_.jpg?r=597",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb2SjnfZKaK8vfubF2aGiKYnVS5FYmcFMxev1BiE70xjLdrtqw0B_gF5NrZQVpib7Yf7qcYFRSGziBLIaUJlur9LyLqcMkiP1eE5frGDz-Q5OKTsn9TupLSeWRmZCukWRDTG.jpg?r=484",
];

const Movies3 = [
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbGa1eqv70--d3wQ3OGNno7bUAuy2xB5pKHJ2Q55CEu5NL4226x5k4Q5LsRYvr4Ot24sbUWYcbqtb2COYIuuBZMJz1F9IOmNnas.jpg?r=994",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWEIGpAMnjqApk59juXGfAFMSSUPF8qrFBKUiFdOZb0It48KT2764BeyEB_vrYceWBtZE6KUPvb3cFlOW4SfcsfW-fW8aLu1XZ8.jpg?r=dee",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRZlfDmu0Vc7LsmuF4u2rvoQjPtYkscXqkP6ZJUn6kMTCRh13iyfOzpBxTzHLfmAB0oYTz4fbMzP5NL9GCc3pvw-zp5RGhdzOaIDYN9dsaoCyrCoOGax_nyj2eHNY7KFVfhQ.jpg?r=5bb",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABU_n4AmTteloPLyG_uBXYrZiPZIfrUupZOtS2RZjg3j36DgFlRYQHnVyt0cMBSeNBuWkYf4qzpuvbzJdtIIDmhMaSzr4ZfjwFf4MMSu7MACQtXclAEcstuWmfCXNwGtwK_j_.jpg?r=597",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb2SjnfZKaK8vfubF2aGiKYnVS5FYmcFMxev1BiE70xjLdrtqw0B_gF5NrZQVpib7Yf7qcYFRSGziBLIaUJlur9LyLqcMkiP1eE5frGDz-Q5OKTsn9TupLSeWRmZCukWRDTG.jpg?r=484",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWzOF6YUMbkp6bCynxRL-xfVup90Y4jZLJAI_0PCcqzo7haDnYosOI3R2VHeGovtS1P8t13iAn4SH61TAHooNmlsFG8Q1H5hhZNjXsVTbZ0l-B3wXLe6Tp48XDPePXADsR0G.jpg?r=8da",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABV6yLGmDJ9lVnNswoH5TTQ7C5wIs1KqHVNtz1T0tMaQux19GM_eRDo-RZetUOqXa4k_K3bKUHVwRek2Y5U3TDdrfnVDNg_QDluk.jpg?r=583",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb5iaPOs1FEFyU7X6Kbb8x8QqYHo8R2uflj3ZRaDvUyGbHhGzd_f1VVSm6yucAsQ0VP_WQtruU1q3nZtHm4GsuG1UU7q2ZTbedQ.jpg?r=528",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcG0ZqeD_pDB-1aMlSQIgHPw3-edKcBEeBOwNnSMEgDBMpC4dw3ygzt-igR4GSGsXLpM6146yygluNhCj_ZosPW-0YWY4stSqsg.jpg?r=0ad",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABboabvkLwzBhpkh3cZkg_8qLAYhJ8Hgeht7ddQ7AF_35wFynyva_ioxyODYL-miPeNhOZhL6S14mD8yif8UZl--T8UjIql3LXSdguA7wHGdFw1SEEMaAdjL0PO64S8HKOwlH.jpg?r=386",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWWeSClEmPfunaX09NYRBku9N8DyE_TYKei3UWws3Zz1dukuXZDCDbcWAA4f5rGlwI4ISrXP2f3oW0Px33hb8IvWYVuW2nu7frRCm4HH5bSrwJNPS3kZ2rZk6enLPFHt0Gjz.jpg?r=76c",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSTB0C_qGsKOd2v4CTBOOu7fzZo15AptnpME14bHzbM0gzrpv2GF_pJ5zu1Zu14VIGHo4v2JGHDLOc_FHNds1opA-usvl9knZ_c.jpg?r=5f8",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdOphxwZ6lEqXK4aJo-MjUdZUInT4rw7TCbJFSA0xaG6_2qpl1sWBpZv1XcW2jZCknB4Mer06eX2nLDG9rxWHQUEsIvUUIpwWjuxHhqviWddRTIAIZCwnGZqOLXrOtDkh3BJ.jpg?r=360",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVWLX08EDaViaLl5iVHk_pO60JprdtZpLsHpeVfufBxXZfa2XHgfQpGQkC1iJUfNPt_-Ye7GnQlYM0CJYQY8ENq_q_uFljDTAcg.jpg?r=d02",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUYGQUvp6eX5H-UWHpTNEpPaFWR4vSKys0Rki-1ubpxKrGsa3vwUTXmBu0tamu8TFvPXFYR0HpHTyChntnSjiy7uJ1-ZhkTLjvs.jpg?r=2a5",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYKRaK0JCekFQTCrTgru7t8jDY5AeJxTAmQABfCm5V7nzaKwIHe6giIREzhj6mjpiXifRuXdPESidjjq-SCHk_IuttzlZ2wTOhE.jpg?r=f8a",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQpzbo9fiXwS7U-gwA51RGkfgE0swgGDp4tsPdyNqh3iLaJTJPT3ObvFwgu_dLEFUUN-2KwEMAeFH0NiOY_yJoy2ap6gmG7-foE.jpg?r=329",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcTAiQkIFBgaKW9VsBfODraRDgYb9etsArxLsbD8nYl7cQSkC8M9zwnf-jK3zdevulvPhF_XFgEDCLlnoeM8Ck8cWaASmAIZv18.webp?r=3bd",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABW29tEpL31IN6GcBSkNpTiOOBGjzhomo1flY9TzWx1znhhyXx-0V3mpKfv_hWIiZx-5DaCc5KDXAliBWxyEcraoNRMqrRnid0Mg.jpg?r=880",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfXhxlOVnD9kEfg4954CQNBVfwPVfcg1LOGHdznfNpg7Da02WW188CBHEcdkeG9XNY7l9SaEzC0k4vQQYcaq4Ku0SN-pg4LmxFk.jpg?r=d04",
];

const Series = [
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdzxh1utv2vAx3lqhRTleLgkoOH8Uli6XNWHHmrZx9WB7yG2tRqTnvZNVGZ00V_Eb8Ey5yKJW2PkukWEQoc4PQ5pF2ORPHGr9UuftlseTx1WZFSM2TQTNZLcn6toDzAV1omA.jpg?r=3bf",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbAuMjlJIiE9-PLl-P3IzJ-ler1pqA9NkjRAAbPTLPB-LyCQYWbOhOboha_A5pidO_8SuW_v17ofu7MRWum2wi6kMgZdMlTb3ji9ZhJIvkgV-35sBWdOFnV4ajiT35CzYNOd.jpg?r=8d0",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWoQeNiAPQVON9oMyi8wsVA5hMW2DUzdOKgLGzay1OL9_xTiRWkVnZT44dtfhWvIKnkINQ7WJ_L7_oFthUpOToVYzVzBX7KoOLE.jpg?r=6f8",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ2IRFz3iLEC8mxkVpGPULIkzTdZhSmcbCwZvLViIwijaQemVgHpQPRefrOEN6HeNspcIWBIEHl0tR3DLcNbuqzUire4Eha9ILNFHo-_UzTYrUF9I5uwPftlifs6oxn8n9bH.jpg?r=6ab",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABa3IC_4NEM9BPnW1DF6eo36jJTV1mknNgsj_epYqs1th1b4eyIJG9sSffOuRDxuawJCVyQzI-FlCQPbGKeu13DDle598siM-L7lk2Smra-exgr1xHNQw2rfdBy-6EPU7QLCY.jpg?r=a13",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbAitjOpEAw1fESo7PUWe4-JtTxkVymAEmToUQ1jACLFjMMNmqUAduwyYr0Ui3ZbeTgayPDU2-ylo3UAun1ngqTjhyY-xAp0h6JmXFzZXYP06K5maHi8agvi7yrj2NCMSrLxssSIIhsmMnEnFMCeHxxYjWZnhYqGsYuHEfQgZwvdkTl14XqvPA70xUnWGASthQ44Ww0fi1Ai6STPuYyRXJXIjbex-w3uhfqZaTbK5jqVLFzD_V4UXpdJJIwH8vVeBGimvXQFFqaC5NAXp5hHzdIqGHGcs-GcyY9CcvlmtZMpaPydqUeo4CmE.jpg?r=1f0",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaONEWm2lcg8CCDkC4CUGkcRiR3eO3fRDOKEh6GjLX626RuIE9L-4EWSRePW0_D0W1So1nezRdvol5MOyQ0bb3SsbXxw9QUyNfw.jpg?r=867",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZnYd6T_lPzJaA8XuyENDyN2scNGdh3TwNFz-qSBfoR5cTUrVwgsZmnOYhnvwyaxQYVhGUI6zqdYB_NT2pHVQTNWxorsI8eubr1kRudSIcTV3zR5c54wt4CavZBHNzklTVAc.jpg?r=e93",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUwPC8Yv-z0Ocm_AXQHQV9KppsoJJESV78RWmzj1tzC9qJpF3FrZe9KTLQ7nU3PsaVEQpUvijFWeCJlSLZS5GxGFVtS26qEY1xGciIM4ubJ3UMGQ0aMAgQ_8Q1Hf1NOApeAR.jpg?r=578",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaNskWXGES-OlocaHuAz3vFDzZu3riGOx4j_zFMd0Jq1dABI0FlF6MXtLgENWIs6Box97oKydP-Rjin934WqV2Fk4xxvcwPyTbqPo2xbkzvsAEMLC5qyXPiC5s4Yl0Isf4-F.jpg?r=e88",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSbZUtkkJzhoBkXj2Fs8EJ7qMJsW6nMn_X0w-xljhHzsAfhxLQa7uQRPR_i0W9g1pBtd14OPAyKaBURO3Gwdhnn9zw54oy9S3wPVaPBMPvTTXHrLO5evq5HrsrAoXbhFYrSP.jpg?r=e4e",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVn6nz7TMpInkRSoTNLq5Ae5mKdBnJ-HVOrRUq8Pz_rH_JSMWXxIpT00N4Q6TAXhiL3uJ8IUUM005lV8xunhqjcwtPG2N-D_3ySUp4Z-Jof83Pg64gSnzEsUoJ-djtG1_7Oy.jpg?r=30e",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeqfT2_-pIeAnhkqj0GpudyhvXhx94AqyF9tkpneVdXu-3OATs6WlyyJJGhDCI9f8aYJJShAluJXN888F2NuB1cdlle-7Ky89bq8VkR-ilzL8yy5sT_4nUedoHC5jun8INFE.jpg?r=a07",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQUT7UuqBkLiKMCFir--DrvZW69ZZpRyHJLkLnAsdFznL-dsCZIu6IhyN84KP_mB1sAEM-umTrGxahp8XN-TQ2UGY3cvHLjnlCzDE51t4vLvt9BnLeVNfxLo54Ag89npPKMx.jpg?r=b54",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABexMFTSu3Fh3PyD1S1y-JvAwXm1Q9nblemkHVG7UcmekZw6jNDObd8Mdffb6N-YJ1Q6dcFiF6Nrfwj1xyUGPz6ftySh4Y6So8MxoaJsA_DqLOcNEBvj7A3hJgHSgsNTuvkCr.jpg?r=f3e",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABf-dimk_uksns6mgg-NeSBqypBYVh3wBnnjVjtSN06rSbYUyrv-GN9L-ar0Bqiff_7P8X3cxPx2yBNwvbdZJQ0T33YqJZSe5KU5sd-6d336x7RIaJJRO1dIEBaxIwgPA0meD.jpg?r=4cd",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZjE2zN-_91rykScSv9nFDQ5usjgsMZASGAxEpiZfFUYqKtPc9adMwqHFL-3uR-6Yxgef5QMX7M9dyo-ZBHgBrqTBRD2ZYgGizyFUwm-xbFQmPDslw6LF6QhZV_WoQoKjDrH.jpg?r=0b3",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcgaFsq-Dr-4pXvWU8NOI4X7qkynOajhbSSvJaqvpqKVeDN9uSDAZr_yJCgq2Zc7BvV_9scPAjyjU-NVRUdp8k2CbWjYACXrTaDx6CVm6ICdfHlOkQt8Gmx7_KdLIwQIqFCN.jpg?r=5da",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVo0-70uDLRzhL5HaCgAar8dlW6GtOsgGnSo_HcHq82-2151Kb3kJ3LCdGd2zs_b7Gee5JmriZuhGjRmF5Om37lHrj5BpXjYKH3noyZpp6eHNXyJR2L4tj7WMbQaem8e-WF57ria4MXtxcBRTotpsz7jXZdP4zGaZgQDY5KggUBnzvuuCjbfs81E7mACMIj36Ud57EcxCzv0zZKFUFwoQEdBYPjoVyOWaZO0MaydDii6wxcDBnBxM7E9tYk66aEPuFa6ngIKOQxGfSZX2nuSt1SewBQCOgPpENYnPJHMDBaC9PakLRqX1v1a.jpg?r=077",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABac1lUzKrZcoOGt1jelGkqyqZM7VOalpL7pETgGNb-sVeG61FOjTFl5EcXQPvfu5-W6aDEK-hWlt9jN6gPWGKYVmT1IkSnERNQk.jpg?r=01d",
];

const Series2 = [
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUwPC8Yv-z0Ocm_AXQHQV9KppsoJJESV78RWmzj1tzC9qJpF3FrZe9KTLQ7nU3PsaVEQpUvijFWeCJlSLZS5GxGFVtS26qEY1xGciIM4ubJ3UMGQ0aMAgQ_8Q1Hf1NOApeAR.jpg?r=578",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaNskWXGES-OlocaHuAz3vFDzZu3riGOx4j_zFMd0Jq1dABI0FlF6MXtLgENWIs6Box97oKydP-Rjin934WqV2Fk4xxvcwPyTbqPo2xbkzvsAEMLC5qyXPiC5s4Yl0Isf4-F.jpg?r=e88",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSbZUtkkJzhoBkXj2Fs8EJ7qMJsW6nMn_X0w-xljhHzsAfhxLQa7uQRPR_i0W9g1pBtd14OPAyKaBURO3Gwdhnn9zw54oy9S3wPVaPBMPvTTXHrLO5evq5HrsrAoXbhFYrSP.jpg?r=e4e",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVn6nz7TMpInkRSoTNLq5Ae5mKdBnJ-HVOrRUq8Pz_rH_JSMWXxIpT00N4Q6TAXhiL3uJ8IUUM005lV8xunhqjcwtPG2N-D_3ySUp4Z-Jof83Pg64gSnzEsUoJ-djtG1_7Oy.jpg?r=30e",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeqfT2_-pIeAnhkqj0GpudyhvXhx94AqyF9tkpneVdXu-3OATs6WlyyJJGhDCI9f8aYJJShAluJXN888F2NuB1cdlle-7Ky89bq8VkR-ilzL8yy5sT_4nUedoHC5jun8INFE.jpg?r=a07",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQUT7UuqBkLiKMCFir--DrvZW69ZZpRyHJLkLnAsdFznL-dsCZIu6IhyN84KP_mB1sAEM-umTrGxahp8XN-TQ2UGY3cvHLjnlCzDE51t4vLvt9BnLeVNfxLo54Ag89npPKMx.jpg?r=b54",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABexMFTSu3Fh3PyD1S1y-JvAwXm1Q9nblemkHVG7UcmekZw6jNDObd8Mdffb6N-YJ1Q6dcFiF6Nrfwj1xyUGPz6ftySh4Y6So8MxoaJsA_DqLOcNEBvj7A3hJgHSgsNTuvkCr.jpg?r=f3e",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABf-dimk_uksns6mgg-NeSBqypBYVh3wBnnjVjtSN06rSbYUyrv-GN9L-ar0Bqiff_7P8X3cxPx2yBNwvbdZJQ0T33YqJZSe5KU5sd-6d336x7RIaJJRO1dIEBaxIwgPA0meD.jpg?r=4cd",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZjE2zN-_91rykScSv9nFDQ5usjgsMZASGAxEpiZfFUYqKtPc9adMwqHFL-3uR-6Yxgef5QMX7M9dyo-ZBHgBrqTBRD2ZYgGizyFUwm-xbFQmPDslw6LF6QhZV_WoQoKjDrH.jpg?r=0b3",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdzxh1utv2vAx3lqhRTleLgkoOH8Uli6XNWHHmrZx9WB7yG2tRqTnvZNVGZ00V_Eb8Ey5yKJW2PkukWEQoc4PQ5pF2ORPHGr9UuftlseTx1WZFSM2TQTNZLcn6toDzAV1omA.jpg?r=3bf",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbAuMjlJIiE9-PLl-P3IzJ-ler1pqA9NkjRAAbPTLPB-LyCQYWbOhOboha_A5pidO_8SuW_v17ofu7MRWum2wi6kMgZdMlTb3ji9ZhJIvkgV-35sBWdOFnV4ajiT35CzYNOd.jpg?r=8d0",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWoQeNiAPQVON9oMyi8wsVA5hMW2DUzdOKgLGzay1OL9_xTiRWkVnZT44dtfhWvIKnkINQ7WJ_L7_oFthUpOToVYzVzBX7KoOLE.jpg?r=6f8",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ2IRFz3iLEC8mxkVpGPULIkzTdZhSmcbCwZvLViIwijaQemVgHpQPRefrOEN6HeNspcIWBIEHl0tR3DLcNbuqzUire4Eha9ILNFHo-_UzTYrUF9I5uwPftlifs6oxn8n9bH.jpg?r=6ab",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABa3IC_4NEM9BPnW1DF6eo36jJTV1mknNgsj_epYqs1th1b4eyIJG9sSffOuRDxuawJCVyQzI-FlCQPbGKeu13DDle598siM-L7lk2Smra-exgr1xHNQw2rfdBy-6EPU7QLCY.jpg?r=a13",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbAitjOpEAw1fESo7PUWe4-JtTxkVymAEmToUQ1jACLFjMMNmqUAduwyYr0Ui3ZbeTgayPDU2-ylo3UAun1ngqTjhyY-xAp0h6JmXFzZXYP06K5maHi8agvi7yrj2NCMSrLxssSIIhsmMnEnFMCeHxxYjWZnhYqGsYuHEfQgZwvdkTl14XqvPA70xUnWGASthQ44Ww0fi1Ai6STPuYyRXJXIjbex-w3uhfqZaTbK5jqVLFzD_V4UXpdJJIwH8vVeBGimvXQFFqaC5NAXp5hHzdIqGHGcs-GcyY9CcvlmtZMpaPydqUeo4CmE.jpg?r=1f0",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaONEWm2lcg8CCDkC4CUGkcRiR3eO3fRDOKEh6GjLX626RuIE9L-4EWSRePW0_D0W1So1nezRdvol5MOyQ0bb3SsbXxw9QUyNfw.jpg?r=867",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZnYd6T_lPzJaA8XuyENDyN2scNGdh3TwNFz-qSBfoR5cTUrVwgsZmnOYhnvwyaxQYVhGUI6zqdYB_NT2pHVQTNWxorsI8eubr1kRudSIcTV3zR5c54wt4CavZBHNzklTVAc.jpg?r=e93",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcgaFsq-Dr-4pXvWU8NOI4X7qkynOajhbSSvJaqvpqKVeDN9uSDAZr_yJCgq2Zc7BvV_9scPAjyjU-NVRUdp8k2CbWjYACXrTaDx6CVm6ICdfHlOkQt8Gmx7_KdLIwQIqFCN.jpg?r=5da",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVo0-70uDLRzhL5HaCgAar8dlW6GtOsgGnSo_HcHq82-2151Kb3kJ3LCdGd2zs_b7Gee5JmriZuhGjRmF5Om37lHrj5BpXjYKH3noyZpp6eHNXyJR2L4tj7WMbQaem8e-WF57ria4MXtxcBRTotpsz7jXZdP4zGaZgQDY5KggUBnzvuuCjbfs81E7mACMIj36Ud57EcxCzv0zZKFUFwoQEdBYPjoVyOWaZO0MaydDii6wxcDBnBxM7E9tYk66aEPuFa6ngIKOQxGfSZX2nuSt1SewBQCOgPpENYnPJHMDBaC9PakLRqX1v1a.jpg?r=077",
  "https://occ-0-3523-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABac1lUzKrZcoOGt1jelGkqyqZM7VOalpL7pETgGNb-sVeG61FOjTFl5EcXQPvfu5-W6aDEK-hWlt9jN6gPWGKYVmT1IkSnERNQk.jpg?r=01d",
];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <Banner />
    <div className="Content">
      <Row Thumbnail={Movies} />
      <Row Thumbnail={Series} />
      <Top10 />
      <Row Thumbnail={Movies2} />
      <Row Thumbnail={Series2} />
      <Row Thumbnail={Movies3} />
    </div>
  </React.StrictMode>
);
