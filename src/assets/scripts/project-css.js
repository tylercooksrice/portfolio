
export function getMyComponentCSS() {
	return `
    project-card {
      flex: 0 0 auto;
      border-radius: 5%;
      margin-block: 1%;
      padding: 2%;
      white-space: wrap;
      height: fit-content;
      width: 50%;

      span {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(3 , auto);
        background-color: #F2F2F2;


        h3 {
          font-size: x-large;
          grid-row: 1;
          grid-column: 1 / -1;
        }

        picture {
          grid-row: 2;
          grid-column: 1 / -1;
          display: flex;
          margin: 0;

          img {
            width: 80%;
          }
        }

        a {
          grid-row: 1;
          grid-column: 5 / 7;
        }

        #github {
          justify-self: center;
          inline-size: 4rem;
          block-size: 4rem;
          border-radius: 0.6rem;
          display: block;
        }

        detail {
          font-size: 1em;
          grid-row: 3;
          grid-column: 1 / -1;
        }
      }
    }
  `;
}