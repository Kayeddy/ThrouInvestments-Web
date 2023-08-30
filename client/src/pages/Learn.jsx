import React, { useState, useEffect, useRef } from "react";
import { Info } from "../components/landingPage/utility_components";
import { motion, AnimatePresence } from "framer-motion";

import { Navbar, Footer, Overlay } from "../components/landingPage";
import { Main } from "../components/registration";

const Learn = () => {
  const [toggleRegistrationModal, setToggleRegistrationModal] = useState(false);
  const [readingMode, setReadingMode] = useState(false);
  const [toggleBlogSection, setToggleBlogSection] = useState(false);
  const [toggleFaqsSection, setToggleFaqsSection] = useState(false);
  const [navBlur, setNavBlur] = useState(true);
  const [scrollbarPosition, setScrollbarPosition] = useState(0);

  const scrollbarRef = useRef(0);
  const tabsRef = useRef(null);

  const blogTabs = [
    {
      title: "¿Qué es la tokenización inmobiliaria?",
      tab: 0,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[40px] lg:text-[50px] text-[30px] md:leading-[60px] font-bold">
            Tokenización inmobiliaria
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            La tokenización inmobiliaria está revolucionando la forma en que
            invertimos en bienes raíces, democratizando el acceso y brindando
            mayor liquidez a los inversores. Pero, ¿qué es la tokenización
            inmobiliaria y cómo funciona? En este artículo, exploraremos el
            concepto de tokenización inmobiliaria, sus beneficios y cómo está
            cambiando el panorama de las inversiones inmobiliarias.
            <br />
            <br />
            <b> ¿Qué es la tokenización inmobiliaria? </b>
            <br />
            La tokenización inmobiliaria es un proceso mediante el cual los
            activos inmobiliarios se dividen en tokens digitales, representando
            una fracción de la propiedad. Estos tokens pueden ser adquiridos por
            inversores, permitiéndoles comprar y vender fracciones de
            propiedades en lugar de tener que invertir en una propiedad
            completa. Al tokenizar activos inmobiliarios, se facilita el acceso
            a inversiones inmobiliarias a un público más amplio y se brinda
            mayor liquidez a los inversores. Además, la tokenización puede
            ayudar a reducir los costos de transacción y facilitar la
            diversificación de las inversiones.
            <br />
            <br />
            <b> Beneficios de la tokenización inmobiliaria </b>
            <br />
            <b>1. Accesibilidad:</b> La tokenización permite a los inversores
            con menos capital invertir en bienes raíces, ya que pueden adquirir
            fracciones de una propiedad en lugar de tener que comprarla en su
            totalidad.
            <br />
            <br />
            <b>2. Liquidez:</b> Los tokens inmobiliarios pueden ser comprados y
            vendidos en plataformas digitales, lo que facilita la entrada y
            salida de las inversiones y aumenta la liquidez en comparación con
            las inversiones inmobiliarias tradicionales.
            <br />
            <br />
            <b>3. Diversificación:</b> Al invertir en tokens inmobiliarios, los
            inversores pueden diversificar sus inversiones en diferentes
            propiedades y ubicaciones, reduciendo el riesgo asociado con la
            inversión en un solo activo.
            <br />
            <br />
            <b>4. Transparencia:</b> La tecnología blockchain, que se utiliza
            para emitir y gestionar tokens inmobiliarios, proporciona un
            registro transparente e inmutable de todas las transacciones, lo que
            facilita la auditoría y la verificación de la propiedad.
            <br />
            <br />
            La tokenización inmobiliaria está cambiando la forma en que
            invertimos en bienes raíces, proporcionando una forma más accesible
            y líquida de invertir en este tipo de activos. Al entender cómo
            funciona la tokenización inmobiliaria y sus beneficios, los
            inversores pueden tomar decisiones más informadas y aprovechar las
            oportunidades que ofrece este innovador enfoque de inversión.
          </p>
        </div>
      ),
    },

    {
      title:
        "¿Cómo funciona la plataforma de inversión inmobiliaria tokenizada de Throu? ",
      order: 1,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[40px] lg:text-[50px] text-[30px] md:leading-[60px] font-bold">
            ¿Cómo funciona la plataforma de inversión inmobiliaria tokenizada de
            Throu?
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            Guía paso a paso para el registro de usuarios y la verificación KYC
            <br />
            <br />
            <b> Paso 1: Accede a Throu.app </b>
            <br />
            Comienza visitando nuestra plataforma a través de este enlace
            <a
              href="https://www.throu.app"
              target="_blank"
              className="underline cursor-pointer hover:font-semibold"
            >
              {" "}
              www.throu.app{" "}
            </a>
            encontrarás una interfaz amigable y fácil de navegar.
            <br />
            <br />
            <b> Paso 2: Registro inicial</b>
            <br />
            Haz clic en el botón{" "}
            <a
              href="/"
              target="_blank"
              className="underline cursor-pointer hover:font-semibold"
            >
              Crear cuenta
            </a>
            , ubicado en la parte superior de la página. Ahora, serás redirigido
            a una página de registro donde se te pedirá que proporciones
            información básica, como tu correo electrónico, nombre, apellido y
            una contraseña segura.
            <br />
            <br />
            <b>Paso 3: Confirmación del correo electrónico</b>
            <br />
            Tras completar el registro, recibirás un correo electrónico de
            confirmación en la dirección que proporcionaste. Busca este correo
            en tu bandeja de entrada y haz clic en el enlace de verificación. Si
            no lo encuentras, revisa la carpeta de spam o solicita que se te
            reenvíe el correo.
            <br />
            <br />
            ¡Ya eres parte de Throu.app como usuario no verificado! Ahora, para
            acceder a todas las funciones y beneficios de nuestra plataforma,
            puedes completar la verificación KYC.
          </p>
        </div>
      ),
    },

    {
      title:
        "¿Cómo empezar a invertir en proyectos inmobiliarios con Throu App?",
      order: 2,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[40px] lg:text-[50px] text-[30px] md:leading-[60px] font-bold">
            ¿Cómo funciona la plataforma de inversión inmobiliaria tokenizada de
            Throu?
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            <b>1. Creación de cuenta y proceso de verificación KYC</b>
            <br />
            Para garantizar la seguridad y cumplir con las regulaciones, Throu
            requiere que los usuarios completen un proceso de verificación de
            identidad (KYC) antes de invertir en la plataforma. Al crear una
            cuenta, se le pedirá que proporcione información como su nombre,
            documento de identidad, edad, número de teléfono celular, correo
            electrónico y dirección de wallet. Este proceso ayuda a prevenir el
            fraude, proteger a los inversores y asegurar el cumplimiento de las
            leyes y regulaciones aplicables.
            <br />
            <br />
            <b>2. Explorar oportunidades de inversión</b>
            <br />
            Una vez que haya completado el proceso de verificación KYC, podrá
            explorar las diversas oportunidades de inversión disponibles en la
            plataforma Throu. Los proyectos en la plataforma pueden variar en
            duración, desde dos años hasta períodos más largos, dependiendo de
            la naturaleza del proyecto y el plan de inversión. Throu ofrece dos
            formas principales de inversión:
            <br />
            <br />
            <span>
              <p className="pl-8 pb-4">
                <b>A. Proyectos de compra, remodelación y venta:</b>
                <br />
                Estos proyectos involucran la adquisición de propiedades que
                requieren renovación o mejoras antes de ser vendidas en el
                mercado. Los inversores pueden obtener beneficios de la
                diferencia entre el precio de compra y el precio de venta
                después de realizar las mejoras necesarias.
              </p>
            </span>
            <span>
              <p className="pl-8 pb-4">
                <b>B. Proyectos de ingresos pasivos:</b>
                <br />
                Estos proyectos se centran en generar ingresos pasivos a través
                de alquileres de corto y largo plazo, como hoteles, Airbnb y
                otras propiedades de alquiler. Los inversores pueden
                beneficiarse de los ingresos generados por estos alquileres, que
                se distribuyen proporcionalmente a los titulares de tokens según
                su participación en la propiedad.
                <br />
              </p>
            </span>
            <span>
              <p className="pl-8">
                <b>C. Seleccionar un proyecto e invertir:</b>
                <br />
                Después de revisar y analizar las oportunidades de inversión en
                la plataforma Throu, puede seleccionar un proyecto que se ajuste
                a sus objetivos de inversión y preferencias. Para invertir,
                simplemente siga las instrucciones en la plataforma y adquiera
                los tokens correspondientes al proyecto utilizando criptomonedas
                o monedas fiduciarias.
              </p>
            </span>
            <br />
            La plataforma de inversión inmobiliaria tokenizada de Throu ofrece
            una forma innovadora y accesible de invertir en bienes raíces. Al
            comprender cómo funciona la plataforma y las oportunidades de
            inversión disponibles, puede tomar decisiones informadas y
            aprovechar al máximo las ventajas de la tokenización inmobiliaria.
          </p>
        </div>
      ),
    },

    {
      title:
        "¿Cómo crear una wallet en MetaMask y acceder a la plataforma Throu?",
      order: 3,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[40px] lg:text-[50px] text-[30px] md:leading-[60px] font-bold">
            ¿Cómo crear una wallet en MetaMask?
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            Para participar en la plataforma de inversión inmobiliaria
            tokenizada Throu, los usuarios deben contar con una wallet digital
            compatible. MetaMask es una wallet popular y fácil de usar que se
            integra con Throu y permite a los usuarios administrar y realizar
            transacciones con tokens de propiedad. En este artículo,
            explicaremos cómo crear una wallet en MetaMask y cómo utilizarla
            para acceder a la plataforma Throu.
            <br />
            <br />
            <b>
              Paso 1:
              <a
                href="https://metamask.io/"
                target="_blank"
                className="underline pl-1"
              >
                Descargar e instalar MetaMask
              </a>
            </b>
            <br />
            1. Visite el sitio web oficial de MetaMask (
            <a
              href="https://metamask.io/"
              target="_blank"
              className="underline"
            >
              https://metamask.io/
            </a>
            ) y haga clic en "Descargar".
            <br />
            <br />
            2. Seleccione la versión de MetaMask adecuada para su navegador
            (Chrome, Firefox, Brave o Edge) y siga las instrucciones para
            instalar la extensión en su navegador.
            <br />
            <br />
            <b>Paso 2: Crear una nueva wallet en MetaMask</b>
            <br />
            1. Haga clic en el ícono de MetaMask en la barra de herramientas de
            su navegador para abrir la extensión.
            <br />
            <br />
            2. Seleccione "Empezar" y luego elija "Crear una wallet".
            <br />
            <br />
            3. Establezca una contraseña segura y haga clic en "Crear".
            <br />
            <br />
            4. MetaMask generará una frase semilla de 12 palabras. Asegúrese de
            guardar esta frase en un lugar seguro, ya que será necesaria para
            recuperar su wallet en caso de que pierda el acceso. Haga clic en
            "Siguiente" una vez que haya respaldado su frase semilla.
            <br />
            <br />
            5. Confirme su frase semilla seleccionando las palabras en el orden
            correcto y haga clic en "Confirmar".
            <br />
            <br />
            6. Una vez que haya confirmado su frase semilla, su wallet de
            MetaMask estará creada y lista para usar.
            <br />
            <br />
            <b>Paso 3: Conectar MetaMask con la plataforma Throu</b>
            <br />
            1. Visite el sitio web de Throu y regístrese o inicie sesión en su
            cuenta.
            <br />
            <br />
            2. Diríjase a la sección de configuración de la cuenta o a la página
            de depósito.
            <br />
            <br />
            3. Seleccione MetaMask como su método de conexión de wallet y haga
            clic en "Conectar".
            <br />
            <br />
            4. Se abrirá una ventana emergente de MetaMask solicitando permiso
            para conectar su wallet con Throu. Haga clic en "Conectar" para
            autorizar la conexión.
            <br />
            <br />
            5. Una vez conectada, su wallet de MetaMask estará vinculada a su
            cuenta de Throu, permitiéndole realizar transacciones y administrar
            sus tokens de propiedad en la plataforma.
            <br />
            <br />
          </p>
          <div className="w-full h-0.5 bg-slate-500" />
          <h1 className="text-[#062147] md:text-[50px] text-[30px] md:leading-[60px] font-bold mt-2">
            Conectar MetaMask a la red Polygon
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            La plataforma Throu funciona en la red Polygon, una solución de
            escalabilidad de capa 2 para Ethereum. Para interactuar con la
            plataforma Throu y realizar transacciones con tokens de propiedad,
            deberá conectar su wallet MetaMask a la red Polygon. En este
            artículo, le guiaremos a través del proceso de configuración de la
            red Polygon en MetaMask y cómo utilizarla en Throu.
            <br />
            <br />
            <b>paso 1: Configurar la red Polygon en MetaMask</b>
            <br />
            1. Abra MetaMask haciendo clic en el ícono en la barra de
            herramientas de su navegador.
            <br />
            <br />
            2. Haga clic en el icono circular en la parte superior derecha y
            seleccione "Configuración" en el menú desplegable.
            <br />
            <br />
            3. En la página de configuración, haga clic en "Redes" y luego en
            "Agregar red".
            <br />
            <br />
            4. Ingrese la siguiente información en los campos correspondientes:
            <br />
            <br />
            <span>
              <p className="pl-8">- Nombre de la red: Polygon</p>
              <br />

              <p className="pl-8">
                - RPC URL:{" "}
                <a
                  href="https://rpc-mainnet.maticvigil.com/"
                  className="underline cursor-pointer"
                >
                  https://rpc-mainnet.maticvigil.com/
                </a>
              </p>
              <br />

              <p className="pl-8">- ChainID: 137</p>

              <p className="pl-16"> ~ Símbolo de moneda (opcional): MATIC</p>
              <br />

              <p className="pl-8">
                - Block Explorer URL (opcional):{" "}
                <a
                  href="https://polygonscan.com/"
                  className="underline cursor-pointer"
                >
                  https://polygonscan.com/
                </a>
              </p>
            </span>
            <br />
            5. Haga clic en "Guardar" para agregar la red Polygon a MetaMask.
            <br />
            <br />
            <b>paso 2. Cambiar a la red Polygon en MetaMask</b>
            <br />
            1. Abra MetaMask y haga clic en la parte superior donde muestra la
            red actual (por ejemplo, "Ethereum Mainnet").
            <br />
            <br />
            2. Seleccione "Polygon" en la lista de redes disponibles. Ahora, su
            MetaMask estará conectada a la red Polygon.
            <br />
            <br />
            <b>paso 3. Transferir fondos a la red Polygon</b>
            <br />
            Para utilizar la plataforma Throu, necesitará fondos en su wallet
            MetaMask en la red Polygon. Puede transferir fondos desde la red
            Ethereum a la red Polygon utilizando un puente de activos.
            <br />
            <br />
            1. Visite el sitio web del puente de Polygon (
            <a
              href="https://wallet.polygon.technology/bridge"
              className="underline cursor-pointer"
            >
              https://wallet.polygon.technology/bridge
            </a>
            ).
            <br />
            <br />
            2. Seleccione "Polygon" en la lista de redes disponibles. Ahora, su
            MetaMask estará conectada a la red Polygon.
            <br />
            <br />
            2. Seleccione el token que desea transferir (por ejemplo, USDT) y la
            cantidad.
            <br />
            <br />
            3. Haga clic en "Transferir" y confirme la transacción en MetaMask.
            Tenga en cuenta que este proceso puede tardar varios minutos o
            incluso horas, dependiendo de la congestión en la red.
            <br />
            <br />
            <b>
              Paso 4: Acceder a la plataforma Throu con MetaMask en la red
              Polygon
            </b>
            <br />
            1. Visite el sitio web de Throu y regístrese o inicie sesión en su
            cuenta.
            <br />
            <br />
            2. Si aún no ha conectado su MetaMask a Throu, siga los pasos en el
            Ejemplo 4 para conectar su wallet.
            <br />
            <br />
            3. Asegúrese de que su MetaMask esté en la red Polygon, como se
            indicó en el Paso 2.
            <br />
            <br />
            4. Ahora puede explorar las oportunidades de inversión en Throu,
            comprar tokens de propiedad y gestionar sus inversiones utilizando
            su wallet MetaMask en la red Polygon.
            <br />
            <br />
            Conectar su wallet MetaMask a la red Polygon y acceder a la
            plataforma Throu es un proceso esencial para aprovechar al máximo la
            tokenización inmobiliaria. Al seguir estos pasos, podrá interactuar
            con la plataforma Throu de manera eficiente y segura, disfrutando de
            las ventajas de la inversión inmobiliaria tokenizada en la red
            Polygon.
          </p>
        </div>
      ),
    },

    {
      title: "¿Qué es una Stablecoin y cómo se utiliza en Throu?",
      order: 4,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[40px] lg:text-[50px] text-[30px] md:leading-[60px] font-bold">
            Stablecoins y su integración en la plataforma de Throu
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            En el mundo de las criptomonedas, la volatilidad es a menudo la
            norma, no la excepción. Los precios pueden subir o bajar
            drásticamente en cuestión de minutos. Aunque esta volatilidad puede
            ofrecer oportunidades lucrativas para algunos, también puede
            presentar riesgos significativos para aquellos que buscan una
            inversión más estable. Aquí es donde entran en juego las
            stablecoins.
            <br />
            <br />
            <b> ¿Qué es una Stablecoin? </b>
            <br />
            Las stablecoins son un tipo especial de criptomoneda diseñadas para
            mantener su valor estable en relación con un activo específico,
            normalmente una moneda fiduciaria como el dólar estadounidense. Al
            estar vinculadas a activos de valor estable, las stablecoins ofrecen
            la promesa de la estabilidad de las monedas fiduciarias
            tradicionales y la funcionalidad y seguridad de las criptomonedas.
            <br />
            <br />
            <b> USDT: Una Stablecoin Popular </b>
            <br />
            Una de las stablecoins más populares y ampliamente utilizadas es
            Tether (USDT). Cada token de USDT está respaldado por un dólar
            estadounidense, que se mantiene en reservas por Tether Ltd., la
            compañía detrás de USDT. Esto significa que, en teoría, cada USDT
            tiene un valor de un dólar estadounidense. El USDT puede ser
            intercambiado en muchas plataformas de criptomonedas y puede ser
            utilizado para comprar otras criptomonedas o para almacenar valor.
            <br />
            <br />
            <b>Uso de USDT en Throu</b>
            <br />
            En Throu, hemos elegido utilizar USDT como nuestra stablecoin de
            elección por varias razones. En primer lugar, la estabilidad del
            USDT lo convierte en una opción atractiva para los inversores que
            buscan evitar la volatilidad asociada con otras criptomonedas.
            Cuando inviertes en proyectos inmobiliarios tokenizados en Throu,
            queremos que te concentres en el potencial del activo inmobiliario
            en sí, no en las fluctuaciones del valor de la criptomoneda.
            <br />
            <br />
            Además, el USDT es ampliamente aceptado y fácil de intercambiar, lo
            que hace que sea conveniente para nuestros usuarios. Puedes comprar
            USDT en la mayoría de los intercambios de criptomonedas y luego
            usarlo para comprar tokens de propiedad en la plataforma Throu.
            <br />
            <br />
            Finalmente, al usar USDT, también podemos proporcionar un proceso de
            inversión y retiro más eficiente. Cuando las ganancias de tu
            inversión estén disponibles y líquidas, podrás retirar tus ganancias
            en USDT directamente desde la plataforma. De igual manera, los
            rendimientos de las inversiones se pueden distribuir automáticamente
            a las wallets de los titulares de los tokens de propiedad.
            <br />
            <br />
            Las stablecoins como USDT ofrecen un equilibrio entre la estabilidad
            de las monedas fiduciarias y la eficiencia y seguridad de las
            criptomonedas. En Throu, nos enorgullece ofrecer a nuestros usuarios
            la capacidad de invertir en activos inmobiliarios tokenizados
            utilizando USDT, proporcionando una experiencia de inversión que es
            tanto segura como conveniente. Con Throu y USDT, puedes navegar por
            el mundo de las inversiones inmobiliarias tokenizadas con confianza.
          </p>
        </div>
      ),
    },

    {
      title: "Retirar ganancias en Throu: un proceso sencillo",
      order: 5,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[40px] lg:text-[50px] text-[30px] md:leading-[60px] font-bold">
            Retirar ganancias en la plataforma de Throu
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            En el mundo de las inversiones, el proceso de retiro de ganancias
            puede ser complicado y, a veces, lento. En Throu, nos enorgullece
            ofrecer un proceso de retiro de ganancias simplificado y eficiente.
            En este artículo, te guiaremos a través de los pasos para retirar
            tus ganancias directamente desde la plataforma Throu o recibir
            automáticamente las ganancias en tu wallet.
            <br />
            <br />
            <b> Paso 1: Inicio de sesión en tu cuenta Throu </b>
            <br />
            Para comenzar el proceso de retiro, primero debes iniciar sesión en
            tu cuenta Throu. Asegúrate de tener a mano tus credenciales de
            inicio de sesión.
            <br />
            <br />
            <b> Paso 2: Revisar tus ganancias </b>
            <br />
            Una vez que hayas iniciado sesión, puedes revisar tus ganancias en
            el tablero de tu cuenta. Aquí, podrás ver todas las inversiones que
            has realizado, así como las ganancias que han generado cada una.
            <br />
            <br />
            <b>Paso 3: Solicitar un retiro</b>
            <br />
            Los tokens inmobiliarios pueden ser comprados y vendidos en
            plataformas digitales, lo que facilita la entrada y salida de las
            inversiones y aumenta la liquidez en comparación con las inversiones
            inmobiliarias tradicionales.
            <br />
            <br />
            <b>Paso 4: Confirmar el retiro</b>
            <br />
            Después de solicitar un retiro, recibirás un correo electrónico para
            confirmar tu solicitud. Una vez confirmado, el proceso de retiro
            comenzará. Throu utiliza USDT, una stablecoin vinculada al dólar
            estadounidense, para procesar los retiros.
            <br />
            <br />
            <b>Paso 5: Recibir tus ganancias</b>
            <br />
            Después de solicitar un retiro, recibirás un correo electrónico para
            confirmar tu solicitud. Una vez confirmado, el proceso de retiro
            comenzará. Throu utiliza USDT, una stablecoin vinculada al dólar
            estadounidense, para procesar los retiros.
            <br />
            <br />
            Además de este proceso manual de retiro, Throu también ofrece la
            opción de retiros automáticos. Con los retiros automáticos, las
            ganancias se distribuirán directamente a las wallets de los
            titulares de tokens de propiedad en un intervalo de tiempo
            especificado. Esta es una excelente opción para aquellos que
            prefieren un enfoque más pasivo para manejar sus inversiones.
            <br />
            <br />
            En Throu, nos esforzamos por hacer que la experiencia de inversión
            sea lo más fácil y conveniente posible. Ya sea que prefieras retirar
            tus ganancias manualmente o recibir pagos automáticos, nuestro
            objetivo es proporcionarte una plataforma en la que puedas invertir
            con confianza y comodidad. Al simplificar el proceso de retiro de
            ganancias, esperamos que puedas centrarte en lo que más importa:
            invertir en activos inmobiliarios tokenizados y ver crecer tu
            patrimonio.
          </p>
        </div>
      ),
    },
  ];

  const faqsTabs = [
    {
      title: "¿Qué es Throu?",
      tab: 0,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[50px] text-[30px] md:leading-[60px] font-bold">
            ¿Qué es Throu?
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            Throu es una plataforma que permite la tokenización de activos
            inmobiliarios, facilitando a los inversores la compra y venta de
            fracciones de propiedades.
          </p>
        </div>
      ),
    },
    {
      title: "¿Qué es la tokenización inmobiliaria?",
      order: 1,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[50px] text-[30px] md:leading-[60px] font-bold">
            ¿Qué es la tokenización inmobiliaria?
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            La tokenización inmobiliaria es un proceso que permite dividir un
            activo inmobiliario en múltiples tokens digitales. Cada token
            representa una fracción de la propiedad del activo.
          </p>
        </div>
      ),
    },

    {
      title: "¿Qué tipo de propiedades están disponibles en Throu?",
      order: 2,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[50px] text-[30px] md:leading-[60px] font-bold">
            ¿Qué es la tokenización inmobiliaria?
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            Throu ofrece una variedad de activos inmobiliarios, incluyendo
            residenciales, comerciales y proyectos de desarrollo, así como
            oportunidades de inversión en proyectos hoteleros.
          </p>
        </div>
      ),
    },
    {
      title: "¿Cómo se compran tokens de propiedad en Throu?",
      order: 3,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[50px] text-[30px] md:leading-[60px] font-bold">
            ¿Cómo se compran tokens de propiedad en Throu?
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            Para comprar tokens de propiedad, los inversores deben registrarse
            en la plataforma, completar el proceso de verificación de identidad
            (KYC/AML), y luego pueden adquirir tokens utilizando criptomonedas o
            monedas fiduciarias.
          </p>
        </div>
      ),
    },
    {
      title: "¿Qué es un proceso de KYC/AML?",
      order: 4,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[50px] text-[30px] md:leading-[60px] font-bold">
            ¿Qué es un proceso de KYC/AML?
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            KYC (Conozca a su cliente) y AML (Anti-lavado de dinero) son
            procesos regulatorios que las instituciones financieras utilizan
            para verificar la identidad de sus clientes y prevenir actividades
            ilegales.
          </p>
        </div>
      ),
    },
    {
      title: "¿Qué es una stablecoin?",
      order: 5,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[50px] text-[30px] md:leading-[60px] font-bold">
            ¿Qué es una stablecoin?
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            Una stablecoin es una criptomoneda cuyo valor está vinculado a un
            activo estable, como el dólar estadounidense. En Throu, utilizamos
            la stablecoin Tether (USDT) para las transacciones.
          </p>
        </div>
      ),
    },
    {
      title: "¿Cómo se retiran las ganancias?",
      order: 6,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[50px] text-[30px] md:leading-[60px] font-bold">
            ¿Cómo se retiran las ganancias?
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            Las ganancias pueden ser retiradas directamente desde la plataforma
            Throu una vez que estén disponibles, o el smart contract puede
            enviar automáticamente las ganancias a las wallets de los
            inversores.
          </p>
        </div>
      ),
    },
    {
      title: "¿Qué es un smart contract?",
      order: 7,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[50px] text-[30px] md:leading-[60px] font-bold">
            ¿Qué es un smart contract?
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            Un smart contract es un programa de computadora que ejecuta
            automáticamente las condiciones de un contrato cuando se cumplen
            ciertos criterios preestablecidos.
          </p>
        </div>
      ),
    },
    {
      title: "¿Qué tipo de token representa la propiedad en Throu?",
      order: 8,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[50px] text-[30px] md:leading-[60px] font-bold">
            ¿Qué tipo de token representa la propiedad en Throu?
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            En Throu, cada propiedad está representada por un token único
            (ERC-1155). Este token ( ERC-1155 ) es una fracción del valor total
            de la propiedad.
          </p>
        </div>
      ),
    },
    {
      title:
        "¿Cuáles son los riesgos asociados con la inversión en tokenización inmobiliaria?",
      order: 9,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[50px] text-[30px] md:leading-[60px] font-bold">
            ¿Cuáles son los riesgos asociados con la inversión en tokenización
            inmobiliaria?
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            Los riesgos incluyen volatilidad de precios, falta de liquidez y
            riesgos del mercado inmobiliario.
          </p>
        </div>
      ),
    },
    {
      title: "¿Cómo se Avalúan los activos inmobiliarios en Throu?",
      order: 10,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[50px] text-[30px] md:leading-[60px] font-bold">
            ¿Cómo se Avalúan los activos inmobiliarios en Throu?
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            Los activos inmobiliarios en Throu son valorados por expertos y
            profesionales del sector inmobiliario, considerando factores como la
            ubicación, el estado de la propiedad, el mercado local y las
            tendencias económicas.
          </p>
        </div>
      ),
    },
    {
      title:
        "¿Cómo se garantiza la liquidez de los tokens de propiedad en Throu?",
      order: 11,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[50px] text-[30px] md:leading-[60px] font-bold">
            ¿Cómo se garantiza la liquidez de los tokens de propiedad en Throu?
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            Throu trabaja para garantizar la liquidez de los tokens de propiedad
            permitiendo su compra y venta en su plataforma y potencialmente en
            mercados secundarios.
          </p>
        </div>
      ),
    },
    {
      title: "¿Cómo se distribuyen las ganancias de la inversión en Throu?",
      order: 12,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[50px] text-[30px] md:leading-[60px] font-bold">
            ¿Cómo se distribuyen las ganancias de la inversión en Throu?
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            Las ganancias de la inversión, se distribuyen proporcionalmente a
            los titulares de tokens según su participación en la propiedad.
          </p>
        </div>
      ),
    },
    {
      title: "¿Qué medidas de seguridad se han implementado en Throu?",
      order: 13,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[50px] text-[30px] md:leading-[60px] font-bold">
            ¿Qué medidas de seguridad se han implementado en Throu?
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            Throu utiliza tecnología blockchain para garantizar la transparencia
            y seguridad de las transacciones. También implementamos medidas de
            seguridad como encriptación, autenticación de dos factores y
            auditorías de seguridad periódicas.
          </p>
        </div>
      ),
    },
    {
      title: "¿Qué sucede si Throu enfrenta problemas técnicos o de seguridad?",
      order: 14,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[50px] text-[30px] md:leading-[60px] font-bold">
            ¿Qué sucede si Throu enfrenta problemas técnicos o de seguridad?
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            En caso de problemas técnicos o de seguridad, Throu trabajará para
            resolver rápidamente el problema y garantizar la protección de los
            activos e información de los usuarios.
          </p>
        </div>
      ),
    },
    {
      title: "¿Puedo retirar mi inversión en cualquier momento?",
      order: 15,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[50px] text-[30px] md:leading-[60px] font-bold">
            ¿¿Puedo retirar mi inversión en cualquier momento?
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            La liquidez de los tokens de propiedad puede variar según el
            proyecto y el mercado secundario. Aunque Throu busca brindar
            liquidez a través de su plataforma, no se garantiza que siempre
            pueda vender sus tokens al precio deseado o en el momento que desee.
          </p>
        </div>
      ),
    },
    {
      title: "¿Cuáles son los costos asociados con la inversión en Throu?",
      order: 16,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[50px] text-[30px] md:leading-[60px] font-bold">
            ¿Cuáles son los costos asociados con la inversión en Throu?
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            Los costos asociados con la inversión en Throu pueden incluir
            tarifas de transacción, tarifas de plataforma y tarifas de gestión
            de activos. Estos costos pueden variar según el proyecto.
          </p>
        </div>
      ),
    },
    {
      title:
        "¿Necesito alguna experiencia previa en inversión inmobiliaria o criptomonedas para invertir en Throu?",
      order: 17,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[50px] text-[30px] md:leading-[60px] font-bold">
            ¿Necesito alguna experiencia previa en inversión inmobiliaria o
            criptomonedas para invertir en Throu?
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            No es necesario tener experiencia previa en inversión inmobiliaria o
            criptomonedas para invertir en Throu. La plataforma es intuitiva y
            fácil de usar, y ofrece recursos educativos para ayudar a los
            inversores a comprender los conceptos y procesos asociados con la
            tokenización inmobiliaria.
          </p>
        </div>
      ),
    },
    {
      title: "¿Cuáles son los mínimos de inversión en Throu?",
      order: 18,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[50px] text-[30px] md:leading-[60px] font-bold">
            ¿Cuáles son los mínimos de inversión en Throu?
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            Throu tiene como objetivo ofrecer inversiones accesibles con
            requisitos mínimos bajos. La inversión mínima puede variar según el
            proyecto, pero puede comenzar desde $100.0 USDT
          </p>
        </div>
      ),
    },
    {
      title: "¿Qué es Metamask y cómo lo utilizo para invertir en Throu?",
      order: 19,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[50px] text-[30px] md:leading-[60px] font-bold">
            ¿Qué es Metamask y cómo lo utilizo para invertir en Throu?
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            Metamask es una cartera digital que permite a los usuarios
            interactuar con la blockchain de Ethereum. En Throu, los inversores
            utilizan Metamask para comprar y vender tokens de propiedad. Puedes
            obtener más información{" "}
            <span
              className="inline"
              onClick={() => {
                handleSectionChange("blog");
                setCurrentTab(blogTabs[2]);
                handle;
              }}
            >
              <p className="inline underline hover:font-semibold cursor-pointer">
                aquí
              </p>
            </span>
            , en nuestra sección de Blog
          </p>
        </div>
      ),
    },
    {
      title: "¿Qué es USDT y cómo se utiliza en Throu?",
      order: 20,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[50px] text-[30px] md:leading-[60px] font-bold">
            ¿Qué es USDT y cómo se utiliza en Throu?
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            USDT, o Tether, es una stablecoin cuyo valor está vinculado al dólar
            estadounidense. En Throu, los inversores utilizan USDT para comprar
            y vender tokens de propiedad. Puedes obtener más información
            <span
              className="inline"
              onClick={() => {
                handleSectionChange("blog");
                setCurrentTab(blogTabs[3]);
                handle;
              }}
            >
              <p className="inline underline hover:font-semibold cursor-pointer">
                aquí
              </p>
            </span>
            , en nuestra sección de Blog
          </p>
        </div>
      ),
    },
    {
      title: "¿Cómo protege Throu mis datos personales?",
      order: 21,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[50px] text-[30px] md:leading-[60px] font-bold">
            ¿Cómo protege Throu mis datos personales?
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            Throu toma en serio la privacidad y la seguridad de los datos.
            Utilizamos tecnología avanzada de seguridad y encriptación para
            proteger sus datos, y cumplimos con todas las leyes y regulaciones
            pertinentes de privacidad y protección de datos.
          </p>
        </div>
      ),
    },
    {
      title: "¿Cómo me registro en Throu?",
      order: 22,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[50px] text-[30px] md:leading-[60px] font-bold">
            ¿Cómo me registro en Throu?
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            Para registrarse en Throu, debe proporcionar ciertos datos
            personales para el proceso de verificación de identidad (KYC), como
            su nombre, documento de identidad, edad, número de celular, correo
            electrónico y dirección de wallet. Puedes obtener más información
            <span
              className="inline"
              onClick={() => {
                handleSectionChange("blog");
                setCurrentTab(blogTabs[1]);
                handle;
              }}
            >
              <p className="inline underline hover:font-semibold cursor-pointer">
                aquí
              </p>
            </span>
            , en nuestra sección de Blog
          </p>
        </div>
      ),
    },
    {
      title: "¿Puedo invertir en Throu si vivo fuera de los Estados Unidos?",
      order: 23,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[50px] text-[30px] md:leading-[60px] font-bold">
            ¿Puedo invertir en Throu si vivo fuera de los Estados Unidos?
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            Sí, Throu es una plataforma global y acepta inversores de muchas
            jurisdicciones alrededor del mundo. Sin embargo, es responsabilidad
            del inversor cumplir con las leyes y regulaciones de su país de
            residencia.
          </p>
        </div>
      ),
    },
    {
      title: "¿Throu proporciona informes de inversiones?",
      order: 24,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[50px] text-[30px] md:leading-[60px] font-bold">
            ¿Throu proporciona informes de inversiones?
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            Sí, Throu proporciona informes regulares de inversiones y
            rendimientos a los inversores. Estos informes están disponibles en
            la plataforma de usuario de Throu.
          </p>
        </div>
      ),
    },
    {
      title: "¿Qué sucede si pierdo el acceso a mi wallet?",
      order: 25,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[50px] text-[30px] md:leading-[60px] font-bold">
            ¿Qué sucede si pierdo el acceso a mi wallet?
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            Recuperar el acceso a su wallet dependerá de la cartera que esté
            utilizando. En muchos casos, se le realizara un proceso de
            verificacion que sea el titular de la wallet y que en el momento sea
            inversionista activo de la plataforma. Se le realizara un proceso
            para la recuperacion de sus activos inmobiliarios que tenia en su
            antigua wallet y los perdidos seran quemados.
          </p>
        </div>
      ),
    },
    {
      title: "¿Qué sucede si la propiedad tokenizada se vende?",
      order: 26,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[50px] text-[30px] md:leading-[60px] font-bold">
            ¿Qué sucede si la propiedad tokenizada se vende?
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            Si una propiedad tokenizada se vende, los titulares de los tokens
            recibirán una parte proporcional de las ganancias de la venta, según
            la cantidad de tokens que posean.
          </p>
        </div>
      ),
    },
    {
      title:
        "¿Puedo intercambiar mis tokens de propiedad por otros activos en Throu?",
      order: 27,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[50px] text-[30px] md:leading-[60px] font-bold">
            ¿Puedo intercambiar mis tokens de propiedad por otros activos en
            Throu?
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            Actualmente, los tokens de propiedad en Throu están destinados a
            representar una participación en una propiedad específica y no se
            pueden intercambiar directamente por otros activos en la plataforma.
          </p>
        </div>
      ),
    },
    {
      title: "¿Cómo se determina el precio de un token de propiedad?",
      order: 28,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[50px] text-[30px] md:leading-[60px] font-bold">
            ¿Cómo se determina el precio de un token de propiedad?
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            El precio de un token de propiedad se basa en la valoración del
            activo inmobiliario subyacente. Este valor se divide por el número
            total de tokens emitidos para esa propiedad.
          </p>
        </div>
      ),
    },
    {
      title: "¿Puedo transferir mis tokens de propiedad a otra persona?",
      order: 29,
      content: (
        <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
          <h1 className="text-[#062147] md:text-[50px] text-[30px] md:leading-[60px] font-bold">
            ¿Puedo transferir mis tokens de propiedad a otra persona?
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            Sí, los tokens de propiedad son transferibles. Sin embargo, la
            capacidad de transferir tokens puede estar sujeta a ciertas
            restricciones y regulaciones, dependiendo de la jurisdicción del
            titular del token.
          </p>
        </div>
      ),
    },
  ];
  const [currentTab, setCurrentTab] = useState(blogTabs[0]);

  const handleRegistrationModal = (state) => {
    setToggleRegistrationModal(state);
  };

  const handleNavBlur = () => {
    window.addEventListener("scroll", () => {
      window.scrollY > 10 ? setNavBlur(true) : setNavBlur(false);
    });
  };

  const handleTabChange = (selectedTab) => {
    setScrollbarPosition(tabsRef.current.scrollTop);
    setCurrentTab(selectedTab);
  };

  const handleSectionChange = (section) => {
    if (section == "blog") {
      setToggleBlogSection(!toggleBlogSection);
      setToggleFaqsSection(false);
      setCurrentTab(blogTabs[0]);
    } else {
      setToggleFaqsSection(!toggleFaqsSection);
      setToggleBlogSection(false);
      setCurrentTab(faqsTabs[0]);
    }
  };

  const Tabs = () => (
    <motion.div
      className="flex flex-col items-start gap-0 justify-start w-full h-screen pb-[100px] overflow-y-auto md:w-[180px] pr-6 md:pr-2 md:pb-[150px] lg:w-[300px] transition-all duration-200 ease-in-out"
      ref={tabsRef}
    >
      {toggleBlogSection &&
        blogTabs.map((tab) => (
          <p
            key={tab.title}
            className={`cursor-pointer text-[20px] font-jakarta ${
              currentTab?.order === tab.order
                ? "border-l-2 border-[#062147] pl-4 text-[#062147] font-bold"
                : "text-[#B5B5B5]"
            }  text-[20px] py-3 font-jakarta`}
            onClick={() => {
              handleTabChange(tab);
              setReadingMode(true);
            }}
          >
            {tab.title}
          </p>
        ))}

      {toggleFaqsSection &&
        faqsTabs.map((tab) => (
          <p
            key={tab.title}
            className={`cursor-pointer text-[20px] font-jakarta ${
              currentTab?.order === tab.order
                ? "border-l-2 border-[#062147] pl-4 text-[#062147] font-bold"
                : "text-[#B5B5B5]"
            }  text-[20px] py-3 font-jakarta`}
            onClick={() => {
              handleTabChange(tab);
              setReadingMode(true);
            }}
          >
            {tab.title}
          </p>
        ))}
    </motion.div>
  );

  const Sections = () => (
    <div className="flex flex-col items-start gap-0 justify-start mt-0">
      <span
        className={`flex flex-row items-center justify-center gap-2 text-[25px] font-jakarta cursor-pointer transition-all duration-200 ease-in-out ${
          toggleBlogSection
            ? "text-[#062147] font-bold"
            : "hover:text-[#062147] hover:opacity-60 text-[#B5B5B5]"
        }`}
        onClick={() => handleSectionChange("blog")}
      >
        <p>Blog</p>

        <span
          className={`material-symbols-outlined flex items-center justify-center ${
            toggleBlogSection ? "rotate-[-90deg]" : "rotate-[180deg]"
          }`}
        >
          arrow_drop_down
        </span>
      </span>
      <span
        className={`flex flex-row items-center justify-center gap-2 text-[25px] font-jakarta cursor-pointer  transition-all duration-200 ease-in-out ${
          toggleFaqsSection
            ? "text-[#062147] font-bold"
            : "hover:text-[#062147] hover:opacity-60 text-[#B5B5B5]"
        }`}
        onClick={() => handleSectionChange("faqs")}
      >
        <p>FAQs</p>
        <span
          className={`material-symbols-outlined flex items-center justify-center ${
            toggleFaqsSection ? "rotate-[-90deg]" : "rotate-[180deg]"
          }`}
        >
          arrow_drop_down
        </span>
      </span>
    </div>
  );

  const DesktopContent = () => (
    <>
      <div className="h-fit relative flex flex-row items-start justify-start gap-12">
        <div className="flex flex-row gap-4">
          <Sections />
          {toggleBlogSection || toggleFaqsSection ? <Tabs /> : ""}
        </div>

        <div className="h-screen overflow-y-auto modal-scrollable-content pb-[250px]">
          {toggleBlogSection || toggleFaqsSection ? (
            <p className="text-[14px] font-jakarta text-[#062147]">
              {toggleBlogSection ? "Blog" : "Faqs"} {">"} {currentTab.title}
            </p>
          ) : (
            ""
          )}

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="h-max flex flex-col items-start justify-start gap-8 pr-[10%] mt-4"
          >
            {toggleBlogSection || toggleFaqsSection ? (
              currentTab.content
            ) : (
              <div className="flex flex-col items-start justify-start md:gap-8 gap-3">
                <h1 className="text-[#062147] md:text-[40px] lg:text-[50px] text-[30px] md:leading-[60px] font-bold">
                  Te damos la bienvenida a Throu
                </h1>
                <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
                  Bienvenido a la sección Aprender de nuestra plataforma. Aquí
                  comienza tu viaje al revolucionario mundo de la inversión en
                  bienes raíces a través de la tecnología blockchain. Con la
                  información e ideas obtenidas aquí, estarás capacitado para
                  navegar por nuestra plataforma con confianza y competencia.
                  <br />
                  <br />
                  Estamos seguros de que cuanto más explores, más te inspirarán
                  las potencialidades de las sinergias entre criptomonedas y
                  bienes raíces. Tu viaje hacia la creación de riqueza y la
                  libertad financiera comienza ahora. Aprende, invierte y
                  prospera con nosotros.
                  <br />
                  <br />
                  Nuestra pestaña de{" "}
                  <b
                    onClick={() => handleSectionChange("blog")}
                    className="cursor-pointer hover:underline"
                  >
                    Blog
                  </b>{" "}
                  te ofrece los últimos conocimientos y tendencias en el campo,
                  mientras que la pestaña de{" "}
                  <b
                    onClick={() => handleSectionChange("faqs")}
                    className="cursor-pointer hover:underline"
                  >
                    FAQs{" "}
                  </b>
                  responde a tus preguntas más urgentes sobre la plataforma.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );

  const MobileContent = () => (
    <>
      {!toggleBlogSection && !toggleFaqsSection ? (
        <div className="w-full h-screen flex flex-col gap-3 overflow-y-auto pb-[100px] pr-4">
          <h1 className="text-[#062147] md:text-[40px] lg:text-[50px] text-[30px] md:leading-[60px] font-bold">
            Te damos la bienvenida a Throu
          </h1>
          <p className="font-jakarta md:text-[18px] text-[14px] text-[#062147]">
            Bienvenido a la sección Aprender de nuestra plataforma. Aquí
            comienza tu viaje al revolucionario mundo de la inversión en bienes
            raíces a través de la tecnología blockchain. Con la información e
            ideas obtenidas aquí, estarás capacitado para navegar por nuestra
            plataforma con confianza y competencia.
            <br />
            <br />
            Estamos seguros de que cuanto más explores, más te inspirarán las
            potencialidades de las sinergias entre criptomonedas y bienes
            raíces. Tu viaje hacia la creación de riqueza y la libertad
            financiera comienza ahora. Aprende, invierte y prospera con
            nosotros.
            <br />
            <br />
            Nuestra pestaña de{" "}
            <b
              onClick={() => handleSectionChange("blog")}
              className="cursor-pointer hover:underline"
            >
              Blog
            </b>{" "}
            te ofrece los últimos conocimientos y tendencias en el campo,
            mientras que la pestaña de{" "}
            <b
              onClick={() => handleSectionChange("faqs")}
              className="cursor-pointer hover:underline"
            >
              FAQs{" "}
            </b>
            responde a tus preguntas más urgentes sobre la plataforma.
          </p>
          <Sections />
          <Tabs />
        </div>
      ) : (
        <>
          {!readingMode ? (
            <div className="flex flex-col items-start gap-4">
              <Sections />
              <Tabs />
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="flex flex-col items-start justify-start gap-8 mt-4 h-screen overflow-y-auto pr-4 pb-[150px]"
            >
              <div className="flex flex-row items-start justify-start gap-2">
                <span
                  className="material-symbols-outlined text-[#B5B5B5] flex items-center justify-center"
                  onClick={() => setReadingMode(false)}
                >
                  arrow_back_ios
                </span>
                <p className="text-[14px] font-jakarta text-[#062147]">
                  {toggleBlogSection ? "Blog" : "FAQs"} {">"}{" "}
                  {currentTab?.title}
                </p>
              </div>
              {currentTab.content}
            </motion.div>
          )}
        </>
      )}
    </>
  );

  useEffect(() => {
    setNavBlur(true);
    setToggleRegistrationModal(false);
    handleNavBlur();
    console.log(tabsRef.current.scrollTop);
  }, []);

  useEffect(() => {
    tabsRef?.current.scrollTo({ top: scrollbarPosition });
  }, [currentTab]);

  return (
    <div className="w-screen h-screen md:min-h-screen font-sen bg-[#F7FAFF] overflow-hidden relative flex flex-col">
      {/* Navbar */}
      <div className="fixed top-0 z-50 w-full h-fit">
        <Navbar
          handleRegistrationModal={handleRegistrationModal}
          blur={navBlur}
          registrationModalState={toggleRegistrationModal}
        />
      </div>
      {/* Main content */}
      <div className="relative w-full h-full md:pl-[6%] px-4 md:pt-[150px] pt-[100px] flex items-start justify-start bg-[#F7FAFF]">
        <AnimatePresence>
          <div className="w-fit h-max hidden md:flex pb-[100px]">
            <DesktopContent />
          </div>
          <div className="w-fit h-fit flex md:hidden">
            <MobileContent />
          </div>
        </AnimatePresence>
      </div>

      {/** <Footer /> */}
      {/* Information tab */}
      <div className="w-fit h-fit z-10">
        <Info />
      </div>
      {/* Registration modal */}
      <div className="md:absolute z-50">
        {toggleRegistrationModal && (
          <Overlay>
            <div className="w-full h-full text-black flex items-center justify-center z-50">
              <Main handleModal={handleRegistrationModal} />
            </div>
          </Overlay>
        )}
      </div>
    </div>
  );
};

export default Learn;
