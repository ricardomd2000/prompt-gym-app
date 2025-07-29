const lessons = [
    {
        id: 'lesson-0',
        title: "Módulo 1: Claridad y Concisión",
        theory: `
### **1. Claridad y Concisión: La Base de un Buen Prompt**

Un prompt efectivo es, ante todo, claro y conciso. Piensa en él como una instrucción directa a una máquina: cada palabra cuenta y la ambigüedad es tu peor enemigo. La IA no puede leer tu mente; solo procesa lo que le das.

#### **¿Por qué es crucial?**

*   **Evita Malentendidos:** Un prompt vago puede llevar a respuestas irrelevantes o incorrectas.
*   **Mejora la Eficiencia:** La IA puede procesar y responder más rápido cuando la instrucción es precisa.
*   **Reduce la "Alucinación":** Un prompt claro minimiza la probabilidad de que la IA invente información.

#### **Técnicas Clave:**

1.  **Usa Verbos de Acción Fuertes:** En lugar de "Háblame de...", usa "Resume", "Explica", "Genera", "Clasifica", "Compara".
2.  **Sé Específico:** Define el tema, el alcance, el tono y el formato deseado. Cuantos más detalles relevantes, mejor.
3.  **Evita la Ambigüedad:** No uses pronombres vagos (ej. "eso", "ellos") sin un referente claro. Sé directo.
4.  **Limita la Longitud (cuando sea posible):** Si bien los prompts pueden ser largos, la concisión se refiere a eliminar palabras innecesarias que no añaden valor.

#### **Ejemplos de Mejora:**

*   **Malo:** "Escribe algo sobre perros."
*   **Mejor:** "Genera un párrafo de 50 palabras sobre los beneficios de tener un perro como mascota, con un tono amigable."

*   **Malo:** "Necesito ayuda con mi ensayo."
*   **Mejor:** "Revisa la siguiente sección de mi ensayo sobre la Revolución Francesa y sugiere 3 mejoras para la coherencia y el flujo de ideas. [Pega aquí la sección del ensayo]."

Recuerda: **Si no lo pides, no lo obtendrás.**
        `,
        task: "Crea un prompt para que la IA resuma un texto de 100 palabras en una sola oración. Asegúrate de que tu prompt sea lo más claro y conciso posible, especificando el objetivo y el formato de salida.",
        masterPrompt: `Actúa como un "Gem", un experto mundial en Prompt Engineering. Tu única misión es enseñar a un usuario novato a mejorar sus prompts.\n\nEl usuario está en el "Módulo 1: Claridad y Concisión". El objetivo de este módulo es que el usuario aprenda a crear prompts que sean directos, específicos y sin ambigüedades.\n\nEl usuario ha enviado el siguiente prompt:\n__BACKTICK_CODE_BLOCK__\n{userPrompt}\n__BACKTICK_CODE_BLOCK__\n\nPor favor, proporciona un feedback constructivo y educativo. Tu respuesta debe estar en formato Markdown y seguir esta estructura:\n\n**1. Análisis del Prompt:** (Evalúa la claridad y concisión del prompt del usuario. ¿Es específico? ¿Deja lugar a dudas?)\n**2. Puntos Fuertes:** (Menciona 1 o 2 cosas que el usuario hizo bien, aunque sea algo simple como tener un objetivo claro).\n**3. Áreas de Mejora:** (Explica cómo el prompt podría ser más claro o conciso. Da ejemplos específicos de mejora).\n**4. Ejemplo Optimizado:** (Muestra una versión mejorada del prompt del usuario que aplique los principios de claridad y concisión).`
    },
    {
        id: 'lesson-1',
        title: "Módulo 2: El Poder del Contexto",
        theory: `
### **2. El Poder del Contexto: Guiando a la IA con Información Relevante**

La IA es una herramienta poderosa, pero carece de memoria y de conocimiento del mundo real más allá de sus datos de entrenamiento. El contexto es la información de fondo que le proporcionas para que entienda mejor tu solicitud y genere respuestas más precisas y relevantes.

#### **¿Por qué es crucial?**

*   **Relevancia:** Sin contexto, la IA puede dar respuestas genéricas o irrelevantes.
*   **Precisión:** Ayuda a la IA a evitar suposiciones incorrectas.
*   **Personalización:** Permite adaptar la respuesta a tus necesidades específicas.

#### **Tipos de Contexto a Incluir:**

1.  **Información de Fondo:** Datos, hechos, historia o cualquier conocimiento previo relevante para la tarea.
2.  **Restricciones y Limitaciones:** Qué debe o no debe hacer la IA (ej. "no uses jerga técnica", "limita la respuesta a 3 puntos").
3.  **Público Objetivo:** Para quién es la respuesta (ej. "para niños de 5 años", "para expertos en finanzas").
4.  **Formato Deseado:** Aunque lo veremos en otro módulo, especificar el formato es una forma de contexto.
5.  **Ejemplos (Few-Shot):** Proporcionar ejemplos de lo que esperas es una forma muy potente de contexto (lo veremos en un módulo avanzado).

#### **Ejemplos de Mejora:**

*   **Malo:** "Dame ideas para una historia."
*   **Mejor:** "Genera 3 ideas para una historia de ciencia ficción ambientada en una colonia lunar abandonada, donde el protagonista es un robot de limpieza que descubre un secreto. El tono debe ser melancólico y la historia debe tener un giro inesperado."

*   **Malo:** "Explícame la inflación."
*   **Mejor:** "Explícame el concepto de inflación a un estudiante de secundaria, usando analogías simples y ejemplos de la vida cotidiana para que sea fácil de entender."

El contexto transforma una respuesta genérica en una respuesta hecha a medida.
        `,
        task: "Pide a la IA una lista de 3 nombres para una nueva marca de café. Dale contexto sobre su público objetivo (jóvenes profesionales) y su valor principal (sostenibilidad). Asegúrate de que el prompt incluya todos los detalles relevantes para guiar a la IA.",
        masterPrompt: `Actúa como un "Gem", un experto mundial en Prompt Engineering. Tu única misión es enseñar a un usuario novato a mejorar sus prompts.\n\nEl usuario está en el "Módulo 2: El Poder del Contexto". El objetivo de este módulo es que el usuario entienda la importancia de proveer información de fondo relevante.\n\nEl usuario ha enviado el siguiente prompt:\n__BACKTICK_CODE_BLOCK__\n{userPrompt}\n__BACKTICK_CODE_BLOCK__\n\nPor favor, proporciona un feedback constructivo y educativo. Tu respuesta debe estar en formato Markdown y seguir esta estructura:\n\n**1. Análisis del Contexto:** (Evalúa si el prompt del usuario incluye suficiente contexto. ¿Menciona el público? ¿El valor principal?)\n**2. Puntos Fuertes:** (Menciona lo que hizo bien al dar contexto).\n**3. Áreas de Mejora:** (Sugiere qué otra información de contexto podría haber añadido para hacer la respuesta de la IA aún mejor).\n**4. Ejemplo Optimizado:** (Muestra una versión mejorada del prompt que enriquece el contexto).`
    },
    {
        id: 'lesson-2',
        title: "Módulo 3: Asignación de Roles (Persona Prompting)",
        theory: `
### **3. Asignación de Roles (Persona Prompting): Dale una Personalidad a la IA**

La asignación de roles es una técnica poderosa donde le pides a la IA que "actúe como" o "asuma el rol de" una persona, un personaje, un experto o incluso un objeto. Esto guía a la IA para que genere respuestas con un tono, estilo, vocabulario y perspectiva específicos.

#### **¿Por qué es crucial?**

*   **Tono y Estilo Consistentes:** La IA adoptará la voz de la persona o entidad asignada.
*   **Conocimiento Específico:** Puede acceder a un subconjunto de su conocimiento que es relevante para ese rol.
*   **Creatividad Dirigida:** Fomenta respuestas más creativas y alineadas con la personalidad.

#### **Cómo Aplicarlo:**

Comienza tu prompt con frases como:
*   "Actúa como un [rol]..."
*   "Asume el rol de [rol]..."
*   "Eres un [rol]..."

Luego, describe brevemente las características clave de ese rol si es necesario. Por ejemplo, "Actúa como un chef italiano apasionado y tradicional..."

#### **Ejemplos de Roles:**

*   **Profesionales:** Experto en marketing, abogado, médico, profesor de historia, desarrollador de software.
*   **Personajes:** Un pirata, un detective de los años 40, un filósofo estoico, un personaje de Shakespeare.
*   **Entidades:** Un motor de búsqueda, un libro de cocina, un sistema operativo.

#### **Ejemplos de Mejora:**

*   **Malo:** "Dame consejos para ahorrar dinero."
*   **Mejor:** "Actúa como un asesor financiero experimentado y dame 5 consejos prácticos para ahorrar dinero para un estudiante universitario con un presupuesto ajustado."

*   **Malo:** "Escribe un poema sobre la naturaleza."
*   **Mejor:** "Asume el rol de un poeta romántico del siglo XIX y escribe un poema de 4 estrofas sobre la belleza de un bosque otoñal."

La asignación de roles es como ponerle un disfraz a la IA para que actúe de una manera específica.
        `,
        task: "Crea un prompt para que la IA, actuando como un crítico de cine muy sarcástico, escriba una reseña de 3 frases sobre una película de superhéroes genérica. Asegúrate de que el tono sea inconfundiblemente sarcástico.",
        masterPrompt: `Actúa como un "Gem", un experto mundial en Prompt Engineering. Tu única misión es enseñar a un usuario novato a mejorar sus prompts.\n\nEl usuario está en el "Módulo 3: Asignación de Roles". El objetivo de este módulo es que el usuario aprenda a guiar el tono, estilo y perspectiva de la IA.\n\nEl usuario ha enviado el siguiente prompt:\n__BACKTICK_CODE_BLOCK__\n{userPrompt}\n__BACKTICK_CODE_BLOCK__\n\nPor favor, proporciona un feedback constructivo y educativo. Tu respuesta debe estar en formato Markdown y seguir esta estructura:\n\n**1. Análisis del Rol:** (Evalúa si el prompt del usuario asigna un rol claro y si el rol es apropiado para la tarea).\n**2. Puntos Fuertes:** (Menciona lo que hizo bien al asignar el rol).\n**3. Áreas de Mejora:** (Sugiere cómo el rol podría ser más específico o cómo el prompt podría reforzar mejor la personalidad deseada).\n**4. Ejemplo Optimizado:** (Muestra una versión mejorada del prompt que utiliza la asignación de roles de manera más efectiva).`
    },
    {
        id: 'lesson-3',
        title: "Módulo 4: Formato de Salida Específico",
        theory: `
### **4. Formato de Salida Específico: Controlando la Estructura de la Respuesta**

Una vez que la IA ha procesado tu solicitud, necesitas que te entregue la información de una manera útil. Pedir un formato de salida específico es crucial para integrar las respuestas de la IA en otras aplicaciones, analizarlas fácilmente o simplemente para que sean más legibles.

#### **¿Por qué es crucial?**

*   **Automatización:** Permite que otras herramientas o scripts procesen la salida de la IA.
*   **Consistencia:** Asegura que las respuestas siempre tengan la same estructura.
*   **Legibilidad:** Facilita la lectura y comprensión de la información.

#### **Formatos Comunes y Cómo Pedirlos:**

1.  **Listas:**
    *   "Lista 5 ideas en viñetas."
    *   "Enumera los pasos como una lista numerada."
2.  **JSON (JavaScript Object Notation):** Ideal para datos estructurados.
    *   "Devuelve la información en formato JSON con las claves 'nombre', 'edad' y 'ciudad'."
    *   __BACKTICK_CODE_BLOCK__json
        {
            "nombre": "[nombre]",
            "edad": [edad],
            "ciudad": "[ciudad]"
        }
        __BACKTICK_CODE_BLOCK__
3.  **Markdown:** Para texto formateado (negritas, cursivas, encabezados, listas).
    *   "Formatea la respuesta usando Markdown, con encabezados para cada sección y listas para los puntos clave."
4.  **Tablas:**
    *   "Presenta los datos en una tabla con columnas para 'Producto', 'Precio' y 'Disponibilidad'."
5.  **XML/CSV:** Menos comunes para prompts directos, but posibles si se especifican.

#### **Ejemplos de Mejora:**

*   **Malo:** "Dime algunas capitales y sus países."
*   **Mejor:** "Genera una lista de 5 capitales y sus respectivos países en formato JSON, con las claves 'capital' y 'pais'."

*   **Malo:** "Explícame cómo hacer café."
*   **Mejor:** "Explica los pasos para preparar café con una prensa francesa, presentándolos como una lista numerada en Markdown."

Especificar el formato es como darle a la IA un molde para que vierta su respuesta.
        `,
        task: "Dado el siguiente texto: 'El Sol es una estrella en el centro de nuestro sistema solar. La Tierra es el tercer planeta desde el Sol. Marte es conocido como el Planeta Rojo.' Extrae el nombre de cada cuerpo celeste y su característica principal, y devuelve la información en formato JSON. Las claves deben ser 'nombre' y 'caracteristica'.",
        masterPrompt: `Actúa como un "Gem", un experto mundial en Prompt Engineering. Tu única misión es enseñar a un usuario novato a mejorar sus prompts.\n\nEl usuario está en el "Módulo 4: Formato de Salida Específico". El objetivo de este módulo es que el usuario aprenda a pedir a la IA que estructure sus respuestas de una manera predefinida.\n\nEl usuario ha enviado el siguiente prompt:\n__BACKTICK_CODE_BLOCK__\n{userPrompt}\n__BACKTICK_CODE_BLOCK__\n\nPor favor, proporciona un feedback constructivo y educativo. Tu respuesta debe estar en formato Markdown y seguir esta estructura:\n\n**1. Análisis del Formato:** (Evalúa si el prompt del usuario pide un formato claro y si es el más adecuado para la tarea).\n**2. Puntos Fuertes:** (Menciona lo que hizo bien al especificar el formato).\n**3. Áreas de Mejora:** (Sugiere cómo el formato podría ser más preciso o cómo el prompt podría guiar mejor a la IA para producir el formato deseado).\n**4. Ejemplo Optimizado:** (Muestra una versión mejorada del prompt que especifica el formato de salida de manera más efectiva).`
    },
    {
        id: 'lesson-4',
        title: "Módulo 5: Ejemplos y Few-Shot Prompting",
        theory: `
### **5. Ejemplos y Few-Shot Prompting: Enseñando con el Ejemplo**

El "Few-Shot Prompting" (prompting con pocos ejemplos) es una técnica avanzada donde proporcionas a la IA uno o más ejemplos de la entrada y la salida deseada. Esto es increíblemente efectivo para guiar a la IA en tareas donde el estilo, el tono o el formato son muy específicos y difíciles de describir solo con palabras.

#### **¿Por qué es crucial?**

*   **Guía el Estilo y Tono:** La IA imitará el estilo de los ejemplos.
*   **Define el Formato Implícitamente:** Si el formato es complejo, los ejemplos lo demuestran mejor que una descripción.
*   **Mejora la Precisión en Tareas Complejas:** Especialmente útil para clasificación, extracción de información o generación creativa.
*   **Reduce la Ambigüedad:** Un ejemplo vale más que mil palabras.

#### **Cómo Aplicarlo:**

Simplemente incluye pares de "entrada: salida" o "pregunta: respuesta" en tu prompt. Asegúrate de que los ejemplos sean consistentes y representativos de lo que esperas.

__BACKTICK_CODE_BLOCK__
Ejemplo 1:
Entrada: "El cielo es azul."
Salida: "El cielo es de color azul claro."

Ejemplo 2:
Entrada: "El perro ladra."
Salida: "El perro hace un ruido fuerte."

Ahora, tu turno:
Entrada: "El gato maúlla."
Salida:
__BACKTICK_CODE_BLOCK__

#### **Ejemplos de Mejora:**

*   **Malo:** "Genera un eslogan para una empresa de tecnología."
*   **Mejor:** "Genera 3 eslóganes para una empresa de tecnología que vende software de productividad. Aquí tienes algunos ejemplos de eslóganes que me gustan:

Ejemplo 1: 'Simplifica tu día.'
Ejemplo 2: 'Productividad sin límites.'
Ejemplo 3: 'Tu trabajo, más inteligente.'

Ahora, genera 3 nuevos eslóganes siguiendo este estilo."

*   **Malo:** "Clasifica este texto como positivo o negativo."
*   **Mejor:** "Clasifica el siguiente texto como 'Positivo', 'Negativo' o 'Neutral'. Aquí tienes ejemplos:

Texto: 'Me encanta este producto.'
Clasificación: Positivo

Texto: 'El servicio fue terrible.'
Clasificación: Negativo

Texto: 'El clima es templado.'
Clasificación: Neutral

Ahora, clasifica el siguiente texto: '[Tu texto aquí]'."

El Few-Shot Prompting es como darle a la IA un manual de estilo con ejemplos prácticos.
        `,
        task: "Crea un prompt para que la IA genere 3 ideas de nombres para una cafetería, siguiendo un estilo 'bohemio y acogedor'. Proporciona al menos 2 ejemplos de nombres que te gusten para guiar a la IA.",
        masterPrompt: `Actúa como un "Gem", un experto mundial en Prompt Engineering. Tu única misión es enseñar a un usuario novato a mejorar sus prompts.\n\nEl usuario está en el "Módulo 5: Ejemplos y Few-Shot Prompting". El objetivo de este módulo es que el usuario aprenda a guiar a la IA con ejemplos para obtener respuestas más precisas y estilizadas.\n\nEl usuario ha enviado el siguiente prompt:\n__BACKTICK_CODE_BLOCK__\n{userPrompt}\n__BACKTICK_CODE_BLOCK__\n\nPor favor, proporciona un feedback constructivo y educativo. Tu respuesta debe estar en formato Markdown y seguir esta estructura:\n\n**1. Análisis de Ejemplos:** (Evalúa si el prompt del usuario incluye ejemplos y si son claros y relevantes).\n**2. Puntos Fuertes:** (Menciona lo que hizo bien al usar ejemplos).\n**3. Áreas de Mejora:** (Sugiere cómo los ejemplos podrían ser más efectivos, o si se necesitan más ejemplos para la tarea).\n**4. Ejemplo Optimizado:** (Muestra una versión mejorada del prompt que utiliza el Few-Shot Prompting de manera más efectiva).`
    },
    {
        id: 'lesson-5',
        title: "Módulo 6: Cadena de Pensamiento (Chain of Thought)",
        theory: `
### **6. Cadena de Pensamiento (Chain of Thought): Razonamiento Paso a Paso**

La "Cadena de Pensamiento" (Chain of Thought - CoT) es una técnica avanzada que le pide a la IA que muestre sus pasos de razonamiento antes de dar la respuesta final. Esto es especialmente útil para problemas complejos que requieren lógica, matemáticas o un proceso de decisión en varias etapas.

#### **¿Por qué es crucial?**

*   **Mejora la Precisión:** Al forzar a la IA a "pensar en voz alta", reduce errores en tareas complejas.
*   **Transparencia:** Puedes ver cómo la IA llegó a su respuesta, lo que ayuda a depurar o entender su lógica.
*   **Manejo de Problemas Complejos:** Permite a la IA abordar problemas que de otra manera serían demasiado difíciles.

#### **Cómo Aplicarlo:**

Simplemente añade frases a tu prompt que animen a la IA a mostrar su proceso:
*   "Piensa paso a paso."
*   "Razona antes de responder."
*   "Explica tu proceso de pensamiento."
*   "Desglosa el problema en pasos lógicos."

También puedes proporcionar ejemplos de cadenas de pensamiento (Few-Shot CoT) para guiarla aún más.

#### **Ejemplos de Mejora:**

*   **Malo:** "¿Cuál es la capital de Francia?"
*   **Mejor (para problemas complejos):** "Si tengo 3 manzanas y compro 2 más, y luego me como 1, ¿cuántas manzanas me quedan? Piensa paso a paso antes de dar la respuesta final."

*   **Malo:** "¿Debería invertir en acciones o bonos?"
*   **Mejor:** "Actúa como un asesor financiero. Analiza los pros y los contras de invertir en acciones vs. bonos para un perfil de riesgo moderado, pensando en voz alta sobre cada punto antes de dar una recomendación final. Desglosa tu análisis en puntos clave."

La Cadena de Pensamiento es como pedirle a la IA que te muestre su borrador antes de entregarte el trabajo final.
        `,
        task: "Tienes 10 libros. Si lees 2 libros por semana, ¿cuántas semanas te tomará leer todos los libros? Piensa paso a paso y muestra tu razonamiento antes de dar la respuesta final.",
        masterPrompt: `Actúa como un "Gem", un experto mundial en Prompt Engineering. Tu única misión es enseñar a un usuario novato a mejorar sus prompts.\n\nEl usuario está en el "Módulo 6: Cadena de Pensamiento". El objetivo de este módulo es que el usuario aprenda a guiar a la IA para que muestre su razonamiento paso a paso, mejorando la precisión en tareas complejas.\n\nEl usuario ha enviado el siguiente prompt:\n__BACKTICK_CODE_BLOCK__\n{userPrompt}\n__BACKTICK_CODE_BLOCK__\n\nPor favor, proporciona un feedback constructivo y educativo. Tu respuesta debe estar en formato Markdown y seguir esta estructura:\n\n**1. Análisis de la Cadena de Pensamiento:** (Evalúa si el prompt del usuario solicita un razonamiento paso a paso y si es apropiado para la tarea).\n**2. Puntos Fuertes:** (Menciona lo que hizo bien al intentar implementar CoT).\n**3. Áreas de Mejora:** (Sugiere cómo el prompt podría guiar mejor a la IA para mostrar su proceso de pensamiento, o si la tarea realmente se beneficia de CoT).\n**4. Ejemplo Optimizado:** (Muestra una versión mejorada del prompt que utiliza la Cadena de Pensamiento de manera más efectiva).`
    }
];