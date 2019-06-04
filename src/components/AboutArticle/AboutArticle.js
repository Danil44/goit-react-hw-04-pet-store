import React from 'react';
import styles from './AboutArticle.module.css';

const AboutArticle = () => (
  <div className={styles.container}>
    <article className={styles.article}>
      <h2 className={styles.title}>Fun facts about us</h2>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis
        quam nec vulputate blandit. Integer convallis massa non velit consequat
        dictum. Proin mollis massa nec mollis suscipit. Vestibulum aliquam purus
        sed egestas congue. Donec nec consequat libero, vitae tincidunt dui.
        Cras cursus in justo et pellentesque. Suspendisse venenatis massa
        tellus, at laoreet odio sagittis luctus. Etiam sit amet auctor magna.
        Etiam ultrices ac eros eu porttitor. Morbi sed accumsan ante. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim
        euismod est, ut molestie eros congue vitae. Cras porta blandit
        venenatis. Nulla facilisi. Duis posuere tellus id magna porta dictum
        quis id elit. Fusce sodales sodales tellus ac tempor. Pellentesque nulla
        ex, bibendum a diam sed, rhoncus tincidunt mi. Aenean sit amet porttitor
        odio. Donec quis luctus sapien, vel hendrerit eros. Mauris eu ipsum sed
        lectus auctor suscipit. Vestibulum quis risus cursus, pulvinar libero
        eu, vulputate nulla. Morbi in urna sit amet nisl placerat laoreet vitae
        vitae turpis. Donec interdum volutpat diam eget suscipit. Aenean non
        arcu et turpis pellentesque ullamcorper. Orci varius natoque penatibus
        et magnis dis parturient montes, nascetur ridiculus mus. Sed malesuada,
        lacus quis tristique dapibus, massa.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non sem in
        nibh auctor mattis. Vestibulum a mauris odio. Nunc sapien enim, tempus
        sit amet malesuada et, pretium ac orci. Aliquam ligula neque, luctus
        egestas eleifend dignissim, convallis nec felis. Nulla bibendum metus
        interdum diam condimentum, et semper orci vestibulum.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia
        molestie turpis nec consequat. Suspendisse auctor, enim id consectetur
        porttitor, justo felis aliquet tortor, at venenatis turpis arcu id
        ipsum. Aliquam vitae odio faucibus, auctor nisl at, accumsan odio.
        Maecenas at volutpat nulla. Fusce eget augue a ante egestas rhoncus. Nam
        et sem consequat, tincidunt dui at, fermentum ex. Phasellus mattis ac
        massa vitae venenatis. Maecenas consequat nec dolor vitae.
      </p>
    </article>
  </div>
);

export default AboutArticle;
