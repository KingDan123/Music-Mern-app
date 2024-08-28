import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../features/Song/SongSlice";
import { Song } from "../types/types";
import { RootState } from "../app/store";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaSpinner } from "react-icons/fa6";
import Modal from "./Modal/Modal";
import UpdateSong from "./UpdateSong";
import DeleteSong from "./DeleteSong";
import { toast } from "react-toastify";

import { Flex, Text, Box, Card, Heading } from "rebass";
import Layout from "./common/Layout";
import {
  ButtonContainer,
  Button,
  Pagination,
  StyledActiveButton,
} from "../assets/style/ListSongsStyle";

const ListSongs: React.FC = () => {
  const dispatch = useDispatch();

  const { songs, isLoading, error } = useSelector(
    (state: RootState) => state.songs
  );

  // Define states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState(1);
  const songsPerPage = 5;

  // Handle song CRUD forms modal
  const handleOpenModal = (component: React.ReactNode) => {
    setModalContent(component);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalContent(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  if (error) {
    toast.error(error);
  }

  // Handle pagination
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastSong = currentPage * songsPerPage;
  const indexOfFirstSong = indexOfLastSong - songsPerPage;
  const currentSongs = songs.slice(indexOfFirstSong, indexOfLastSong);
  const totalPages = Math.ceil(songs.length / songsPerPage);

  return (
    <Layout>
      <Flex flexDirection="column" alignItems="center" px={4} py={5}>
        {isLoading ? (
          <Text
            fontWeight="bold"
            textAlign={"center"}
            fontSize={"1.5rem"}
            marginY={"10%"}
          >
            <FaSpinner />
            Loading...
          </Text>
        ) : (
          currentSongs.map((song: Song) => (
            <Card
              key={song._id}
              width={["90%", "90%", "90%"]}
              mb={3}
              p={3}
              sx={{
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
                },
                bg: "linear-gradient(to right, #f8f9fa, #e9ecef)",
              }}
            >
              <Flex flexDirection="row" alignItems="center" mb={4}>
                <Box width={["10%", "10%"]}>
                  <img
                    src="../../assets/sound-icon.png"
                    alt="Song"
                    style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  />
                </Box>
                <Box width={["25%", "30%"]} px={2}>
                  <Heading as="h3" mb={1} fontSize={["16px", "18px"]} fontWeight="bold">
                    {song.title}
                  </Heading>
                  <Text fontSize={["14px", "16px"]} color="gray">
                    {song.artist}
                  </Text>
                </Box>
                <Box width={["20%", "25%"]}>
                  <Text fontSize={["14px", "16px"]} fontWeight="bold">
                    Album: {song.album}
                  </Text>
                  <Text fontSize={["14px", "16px"]} color="gray">
                    {song.genre}
                  </Text>
                </Box>
              </Flex>
              <Flex justifyContent="flex-end">
                <ButtonContainer>
                  <Button
                    style={{ backgroundColor: "lightblue", color: "darkblue" }}
                    onClick={() =>
                      handleOpenModal(
                        <UpdateSong onClose={handleCloseModal} id={song._id} />
                      )
                    }
                  >
                    <CiEdit />
                  </Button>
                  <Button
                    style={{ backgroundColor: "lightcoral", color: "darkred" }}
                    onClick={() =>
                      handleOpenModal(
                        <DeleteSong onClose={handleCloseModal} id={song._id} />
                      )
                    }
                  >
                    <MdOutlineDeleteOutline />
                  </Button>
                </ButtonContainer>
              </Flex>
            </Card>
          ))
        )}
        <Pagination>
          {Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1;
            return pageNumber === currentPage ? (
              <StyledActiveButton key={index} onClick={() => handlePageChange(pageNumber)}>
                {pageNumber}
              </StyledActiveButton>
            ) : (
              <Button key={index} onClick={() => handlePageChange(pageNumber)}>
                {pageNumber}
              </Button>
            );
          })}
        </Pagination>
      </Flex>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        component={modalContent}
      />
    </Layout>
  );
};

export default ListSongs;
