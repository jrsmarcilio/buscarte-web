import React from "react";

import { Container, ArtistsContent, ArtistItem, FotoNull } from "./styles";

const ArtistsList = ({ artistas }) => {
  return (
    <Container>
      <ArtistsContent>
        {artistas.map((item) => (
          <ArtistItem key={item.id}>
            {item.Artista_foto_atelie ? (
              <>
                {item.Artista_foto_atelie.Foto_atelie && (
                  <>
                    <img
                      src={item.Artista_foto_atelie.Foto_atelie.descricao}
                      alt=""
                    />
                  </>
                )}
              </>
            ) : (
              <>
                <FotoNull />
              </>
            )}
            <span>{item.nome}</span>
          </ArtistItem>
        ))}
      </ArtistsContent>
    </Container>
  );
};

export default ArtistsList;
