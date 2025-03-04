import { useTerminalsStore } from "modules/terminals/store/useTerminalsStore";
import { Turnabout } from "shared/ui";
import { CellLayout } from "shared/ui/components/CellLayout/CellLayout";
import { Container } from "./TerminalImages.styled";

export const TerminalImages = () => {
  const queryItem = useTerminalsStore((state) => state.queryItem);

  const images =
    queryItem?.mediaFiles?.map((image) => ({
      url: image?.url,
      alt: queryItem?.description ?? "Зображення пристрою",
    })) || [];

  return (
    <CellLayout>
      <Container>
        <Turnabout imagesList={images} imageSize="260"></Turnabout>
      </Container>
    </CellLayout>
  );
};
